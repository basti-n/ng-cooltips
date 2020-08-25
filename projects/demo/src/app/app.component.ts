import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <div style="text-align:center; box-sizing: border-box">
      <h1
        ngCooltips="Hello World"
        [cooltipConfig]="{ color: 'white', bgColor: 'black', showBorder: true }"
      >
        Welcome to {{ title }}!
      </h1>
      <h3 [ngCooltips]="prettyTooltip">
        Deutsche Bahn
      </h3>
    </div>

    <ng-template #prettyTooltip>
      <h1 style="color: red">Thank your for travelling with deutsche</h1>
    </ng-template>
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
