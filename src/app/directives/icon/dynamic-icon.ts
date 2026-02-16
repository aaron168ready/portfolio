import { computed, Directive, effect, ElementRef, inject, input } from '@angular/core';
import { IconName, icons } from './icon.registry';

@Directive({
  selector: '[dynamic-icon]',
})
export class DynamicIconDirective {
  #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  iconName = input.required<IconName | undefined>();

  //TODO: color & size

  iconSVG = computed<string | undefined>(() => {
    const name = this.iconName();
    return name ? icons[name] : undefined;
  });

  constructor() {
    effect(() => {
      this.iconSVG();
      this.#elementRef.nativeElement.innerHTML = this.iconSVG() || '';
    });
  }
}
