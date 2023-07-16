import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent {
  title: string = '';
  artwork = [];

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data['title'];
    this.artwork = this.route.snapshot.data['artwork'];
  }
}
