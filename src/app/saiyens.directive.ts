import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSaiyens]'
})
export class SaiyensDirective {

  @Input() set appSaiyens(condition:boolean){
    if(condition){
      this.vwRef.createEmbeddedView(this.tplRef);
    }else{
      this.vwRef.clear();
    }
  }
  constructor(private tplRef:TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
