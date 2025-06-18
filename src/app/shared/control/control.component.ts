import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disables style scoping it will be global CSS
  host: {
    class: 'control', //replaces class="control" attribute on app-control element
    '(click)': 'onClick()', // recommended
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control'; //same az host: { class: 'control' } exists for backwards compatibility reasons
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  @Input({ required: true }) label!: string;
  @Input({ required: true }) labelFor!: string;

  private el = inject(ElementRef); //host element itself (programmaticly change what is visible on the page)

  onClick() {
    console.log('Clicked!');
    console.log(this.el); //host element
  }
}
