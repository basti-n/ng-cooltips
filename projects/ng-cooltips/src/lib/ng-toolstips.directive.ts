import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  ViewContainerRef,
} from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { OverlayService } from './services/overlay.service';
import { TooltipMode, CooltipConfig } from './models';

@Directive({
  selector: '[ngCooltips]',
  exportAs: 'ngCooltips',
})
export class NgCooltipsDirective {
  @Input('ngCooltips') content: TooltipMode;
  @Input() cooltipConfig: CooltipConfig;

  private overlayRef: OverlayRef;

  get host(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private overlayService: OverlayService
  ) {}

  @HostListener('mouseenter') show() {
    this.overlayRef = this.overlayService.open({
      content: this.content,
      viewContainerRef: this.viewContainerRef,
      cooltipConfig: this.cooltipConfig || {},
      overlayConfig: {},
      host: this.host,
    });
  }

  @HostListener('mouseout') hide() {
    this.overlayService.close(this.overlayRef);
  }
}
