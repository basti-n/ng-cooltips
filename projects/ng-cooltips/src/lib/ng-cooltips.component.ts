import {
  Component,
  ViewEncapsulation,
  Renderer2,
  ViewContainerRef,
  OnInit,
  TemplateRef,
  ElementRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { TooltipConfig, TooltipMode, CooltipConfig } from './models';

@Component({
  selector: 'ng-cooltips',
  styleUrls: ['../styles.scss'],
  template: ` <div class="tooltip-container">
    <ng-content></ng-content>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class NgCooltipsComponent implements OnInit {
  constructor(
    private config: TooltipConfig,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver
  ) {
    console.log({ config });
  }

  get content(): TooltipMode {
    return this.config.content;
  }

  ngOnInit() {
    this.initView();
  }

  initView() {
    if (this.isString(this.content)) {
      const content: HTMLParagraphElement = this.renderer.createElement('p');
      content.textContent = this.content;
      this.applyStyles(content, this.config.cooltipConfig);
      return this.renderer.appendChild(this.elementRef.nativeElement, content);
    }
    if (this.isTemplate(this.content)) {
      return this.viewContainerRef.createEmbeddedView(this.content);
    }

    return this.viewContainerRef.createComponent(
      this.resolver.resolveComponentFactory(this.content)
    );
  }

  private isString(content: TooltipMode): content is string {
    return typeof content === 'string';
  }

  private isTemplate(content: TooltipMode): content is TemplateRef<any> {
    return content instanceof TemplateRef;
  }

  private applyStyles(element: HTMLElement, config: CooltipConfig): void {
    if (!config) {
      return;
    }
    if (config.color) {
      this.renderer.setStyle(element, 'color', config.color);
    }
    if (config.bgColor) {
      this.renderer.setStyle(element, 'background', config.bgColor);
    }
    if (config.showBorder) {
      this.renderer.setStyle(element, 'border', '1px solid lightgrey');
    }
    this.renderer.setStyle(element, 'padding', '10px 15px');
  }
}
