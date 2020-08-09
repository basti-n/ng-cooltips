import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-cooltips',
  template: `
    <p>
      {{ text }}
    </p>
  `,
  styleUrls: ['../styles.scss'],
  styles: [
    `
      p {
        background-color: #292929;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgCooltipsComponent {
  @Input() text: string;

  constructor() {}
}
