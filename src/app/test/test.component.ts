import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  name:string = 'Nabeel'
  placeholder = 'placeholder name'
  isDisabled = true
  message = ''
  open = 'warn'

  showMessage() {
    // alert('Welcome: ' + this.name)
    this.message = 'Muhammad: ' + this.name
  }
}
