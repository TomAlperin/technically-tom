import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent {
  @Input() images: { src: string, alt: string, url?: string }[] = [];
  rows: number[] = [];
  columns: number[] = [];

  ngOnInit() {
    this.rows = Array(Math.ceil(this.images.length / 4)).fill(null).map((_, index) => index * 4);
    this.columns = Array(4).fill(null).map((_, index) => index);
  }
}
