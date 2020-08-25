import { Injectable, ViewContainerRef, Injector, Type } from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { PositionService } from './position.service';
import { NgCooltipsComponent } from '../ng-cooltips.component';
import { TooltipConfig, TooltipMode } from '../models';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(
    private overlay: Overlay,
    private positionService: PositionService
  ) {}

  open(config: TooltipConfig): OverlayRef {
    const positionStrategy = this.tooltipPositionStrategy(config.host);
    const overlayRef = this.overlay.create({
      positionStrategy,
      ...config.overlayConfig,
    });

    overlayRef.attach(
      new ComponentPortal(
        NgCooltipsComponent,
        config.viewContainerRef,
        this.getInjector(config)
      )
    );
    return overlayRef;
  }

  close(overlayRef: OverlayRef): void {
    overlayRef.detach();
  }

  private getInjector(config: TooltipConfig): Injector {
    return Injector.create({
      providers: [
        {
          provide: TooltipConfig,
          useValue: config,
        },
      ],
    });
  }

  private tooltipPositionStrategy(host: HTMLElement): PositionStrategy {
    return this.positionService.configurePosition({
      target: host,
      showArrow: true,
    });
  }
}
