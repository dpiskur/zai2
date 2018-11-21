import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appPreview]'
})
export class PreviewDirective {


  // constructor(el: ElementRef, private sanitizer: DomSanitizer, private elementRef: ElementRef){
  // this.elementRef.nativeElement.innerHTML =
  // '<p><img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"><p>';


  @Input()
  private urlLink: string;

  private paragraph;


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');


  }



  @HostListener('mouseenter')
  mouseenter(eventImg: Event) {
    this.paragraph.innerHTML = '<img src="' + this.urlLink + '" height="200" width="200" >';

    console.log(this.paragraph);
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    console.log(this.urlLink);
  }

  @HostListener('mouseleave')
  mouseleave(eventImg: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);

  }
}
