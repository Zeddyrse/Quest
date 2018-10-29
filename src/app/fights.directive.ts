import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFights]'
})
export class FightsDirective {



  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', 0.2);
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', 1);
  }


}
