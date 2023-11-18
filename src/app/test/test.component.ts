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
  isAdmin = true

  showMessage() {
    this.message = 'Welcome ' + this.name
  }
}
