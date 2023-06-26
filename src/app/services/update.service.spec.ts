import { TestBed } from '@angular/core/testing';

import { UpdateService } from './update.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('UpdateService', () => {
  let service: UpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: false,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
      ]
    });
    service = TestBed.inject(UpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
