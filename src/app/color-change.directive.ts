import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(
    private el: ElementRef
  ) {}
   originalText = '';

  @HostListener('mouseenter')
  onEnter(){

    this.originalText = this.el.nativeElement.innerText;

    if(this.originalText.length > 30){
      this.el.nativeElement.innerText =
      this.originalText.substring(0,30) + '...';
    }

  }

  @HostListener('mouseleave')
  onLeave(){
    this.el.nativeElement.innerText = this.originalText;
  }

    
}
