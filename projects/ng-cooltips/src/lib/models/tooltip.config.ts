import { TooltipMode } from './tooltipe-mode.type';
import { ViewContainerRef } from '@angular/core';
import { OverlayConfig } from '@angular/cdk/overlay';
import { CooltipConfig } from './cooltip-config';

export abstract class TooltipConfig {
  content: TooltipMode;
  viewContainerRef: ViewContainerRef;
  cooltipConfig: CooltipConfig;
  overlayConfig: Partial<OverlayConfig>;
  host?: HTMLElement;
}
