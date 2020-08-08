import {
  Directive,
  Input,
  TemplateRef,
  ElementRef,
  HostListener,
  OnInit,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';
import {
  Overlay,
  OverlayRef,
  OverlayPositionBuilder,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgCooltipsComponent } from './ng-cooltips.component';

@Directive({
  selector: '[ngCooltips]',
  exportAs: 'ngCooltips',
})
export class NgCooltipsDirective implements OnInit {
  @Input() content: string | TemplateRef<any>;

  private overlayRef: OverlayRef;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {}

  @HostListener('mouseenter') show() {
    if (typeof this.content === 'string') {
      const tooltipRef: ComponentPortal<NgCooltipsComponent> = new ComponentPortal(
        NgCooltipsComponent,
        this.viewContainerRef
      );

      const tooltipComp: ComponentRef<NgCooltipsComponent> = this.overlayRef.attach(
        tooltipRef
      );

      this.addContext(tooltipComp.instance, 'text', this.content);
    }
  }

  @HostListener('mouseout') hide() {
    this.overlayRef.detach();
  }

  ngOnInit() {
    this.initOverlay();
  }

  initOverlay() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.configurePosition()
    });
  }

  configurePosition(): PositionStrategy {
    return this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'top',
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'center',
        },
      ]);
  }

  private addContext<T>(component: T, property: keyof T, value: any) {
    component[property] = value;
  }
}
