import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-cooltips',
  template: `
    <p>
      {{ text }}
    </p>
  `,
  styleUrls: ['./styles.scss'],
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
})
export class NgCooltipsComponent {
  @Input() text: string;

  constructor() {}
}
