import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appPreview]'
})
export class PreviewDirective {

  @Input()
  private urlLink: string;

  private paragraph;


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');


  }



  @HostListener('mouseenter')
  mouseenter(eventImg: Event) {
    this.paragraph.innerHTML = '<img src="' + this.urlLink + '" height="200" width="200" >';
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventImg: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);

  }
}
