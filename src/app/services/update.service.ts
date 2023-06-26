import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { environment } from '@environment';
import { ConfirmComponent } from '@shared/confirm/confirm.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { concat, interval, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { isArray as _isArray } from 'lodash';

enum UPDATE_EVENT {
  DETECTED = 'VERSION_DETECTED',
  READY = 'VERSION_READY',
  FAILED = 'VERSION_INSTALLATION_FAILED'
}

@Injectable({ providedIn: 'root' })
export class UpdateService {
  confirmModalRef?: BsModalRef;
  closed$ = new Subject();

  constructor(
    appRef: ApplicationRef,
    private updates: SwUpdate,
    private modalService: BsModalService
  ) {
    if (environment.production) {
      // Allow the app to stabilize first, before starting
      // polling for updates with `interval()`.
      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
      // check for updates every 15 minutes.
      const everySixHours$ = interval(15 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

      everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());

      let initialState;

      modalService.onHide.subscribe((reason: string | any) => {
        this.confirmModalRef = undefined;
      });

      updates.versionUpdates.subscribe((evt: VersionEvent) => {
        if (!this.confirmModalRef) {
          switch (evt.type) {
            case UPDATE_EVENT.DETECTED:
              break;
            case UPDATE_EVENT.READY:
              const { version, notes } = evt.latestVersion.appData as { version: string, notes: string };
              initialState = {
                confirmTitle: 'Site Updated',
                itemList: _isArray(notes) ? notes : undefined,
                confirmMsg: `${version}:${_isArray(notes) ? '' : ' ' + notes} Refresh page to update.`,
                ok: 'Refresh',
                cb: this.refresh
              };
              this.confirmModalRef = this.modalService.show(ConfirmComponent, { initialState, class: 'confirm-modal' });
              this.subscribeToModal();
              break;
            case UPDATE_EVENT.FAILED:
              initialState = {
                confirmTitle: 'Update Failed',
                confirmMsg: `Failed to install app version '${evt.version.hash}': ${evt.error}. Refresh page to update.`,
                ok: 'Refresh',
                cb: this.refresh
              };
              this.confirmModalRef = this.modalService.show(ConfirmComponent, { initialState, class: 'confirm-modal' });
              this.subscribeToModal();
              break;
          }
        }
      });
    }
  }

  subscribeToModal() {
    this.confirmModalRef?.onHidden?.pipe(takeUntil(this.closed$))
      .subscribe(() => {
        this.closed$.next(true);
        this.confirmModalRef = undefined;
      });
  }

  refresh = () => {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
