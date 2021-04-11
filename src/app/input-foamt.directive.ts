import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFoamt]'
})
export class InputFoamtDirective {
  @Input('appInputFoamt') format:any;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    console.log('blurring');
   let value: string = this.el.nativeElement.value;
   if (this.format == 'lowercase')
   this.el.nativeElement.value = value.toLowerCase();
   else 
   this.el.nativeElement.value = value.toUpperCase();
  }


}
