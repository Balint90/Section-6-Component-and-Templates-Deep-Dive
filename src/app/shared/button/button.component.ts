import { Component } from '@angular/core';

@Component({
  //EXTENDING ELEMENTS
  selector: 'button[appButton]',  //attribute-selector: [<attribute>], css class selector .button --> combine with elements: button.button
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
