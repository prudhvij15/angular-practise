import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnly {

  constructor() { }

  @HostBinding('style.background-color') // bind 'style' property to host element()
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    const value = event.target.value
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }

}
