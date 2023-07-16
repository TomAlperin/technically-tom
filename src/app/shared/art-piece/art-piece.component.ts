import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

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

      this.image = '';
      setTimeout(() => this.image = this.route.snapshot.data['meta'].image, 300);
    })
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
