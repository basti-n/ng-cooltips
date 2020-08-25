import { Injectable } from '@angular/core';
import { PositionStrategy, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { PositionConfig } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  constructor(private overlayPositionBuilder: OverlayPositionBuilder) {}

  public configurePosition(config: PositionConfig): PositionStrategy {
    return this.overlayPositionBuilder
      .flexibleConnectedTo(config.target)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          panelClass: 'arrow-down',
          offsetY:
            parseFloat(window.getComputedStyle(config.target).marginTop) / 2,
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'center',
        },
      ]);
  }
}
