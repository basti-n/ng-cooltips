import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <div style="text-align:center">
      <h1 ngCooltips content="Hello World">Welcome to {{ title }}!</h1>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 5rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Demo Tooltip Text';
}
