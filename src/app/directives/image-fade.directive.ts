import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appFadeImg]'
})
export class ImageFadeDirective {

  constructor(private el: ElementRef) {
    Object.assign(el.nativeElement.style, {
      opacity: '0',
      transition: 'opacity .6s ease-in-out' 
    });
  }

  @HostListener('load')
  onLoad() {
    this.el.nativeElement.style.opacity = '1';
  }
}