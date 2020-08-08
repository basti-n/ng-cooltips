import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgCooltipsComponent } from './ng-cooltips.component';
import { NgCooltipsDirective } from './ng-toolstips.directive';

@NgModule({
  declarations: [NgCooltipsComponent, NgCooltipsDirective],
  imports: [OverlayModule],
  exports: [OverlayModule, NgCooltipsComponent, NgCooltipsDirective],
  entryComponents: [NgCooltipsComponent],
})
export class NgCooltipsModule {}
