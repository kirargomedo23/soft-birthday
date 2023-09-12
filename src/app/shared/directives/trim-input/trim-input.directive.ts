import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrimInput]'
})
export class TrimInputDirective {

  constructor( private readonly renderer: Renderer2) { }

  @HostListener('input', ['$event']) onInput(event: Event): void { 
    const trimmedValue = (event.target as HTMLInputElement).value.trim(); 
    this.renderer.setProperty(event.target, 'value', trimmedValue);
  }
  

}
