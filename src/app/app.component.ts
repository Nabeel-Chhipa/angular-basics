import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [`
    p {
      color: red;
      font-size: 2rem;
      line-height: 1rem
    }
    h3 {
      color: blue;
      line-height: 0
    }
  `]
})
export class AppComponent {
  title = 'my-app';
}
