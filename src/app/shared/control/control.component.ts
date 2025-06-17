import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disables style scoping it will be global CSS
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) labelFor!: string;
}
