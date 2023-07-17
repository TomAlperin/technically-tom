import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-art-piece',
  templateUrl: './art-piece.component.html',
  styleUrls: ['./art-piece.component.scss']
})
export class ArtPieceComponent {
  title: string = '';
  image: string = '';
  prevUrl: string = '';
  nextUrl: string = '';
  back: string = '';
  fadeImg = true;
  slideShowSub?: Subscription;
  doSlideShow: boolean = false;
  destroyed$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.params.subscribe(params => {
      this.title = this.route.snapshot.data['meta'].title;
      this.prevUrl = this.route.snapshot.data['meta'].prevUrl;
      this.nextUrl = this.route.snapshot.data['meta'].nextUrl;
      this.back = this.route.snapshot.data['back'];

      this.fadeImg = false;
      setTimeout(() => {
        this.image = this.route.snapshot.data['meta'].image;
        this.fadeImg = true;
      }, 500);
    })
  }

  slideShow(doSlideShow: boolean) {
    this.doSlideShow = doSlideShow;

    if (this.doSlideShow) {
      this.slideShowSub = interval(6000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.router.navigate([this.nextUrl]);
      });
    } else {
      this.slideShowSub?.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
