import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[appFadeImg]'
})
export class ImageFadeDirective implements OnChanges {
  @Input() appFadeImg!: boolean | '';

  constructor(private el: ElementRef) {
    Object.assign(el.nativeElement.style, {
      opacity: '0',
      transition: 'opacity .6s ease-in-out' 
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appFadeImg']) {
      if (this.appFadeImg === true) {
        this.el.nativeElement.style.opacity = '1';
      } else {
        this.el.nativeElement.style.opacity = '0';
      }
    }
  }

  @HostListener('load')
  onLoad() {
    this.el.nativeElement.style.opacity = '1';
  }
}