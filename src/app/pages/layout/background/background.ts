import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `<div class="pointer-events-none fixed inset-0 overflow-hidden">
    <div
      class="absolute -top-24 -left-24 size-[520px] rounded-full bg-surface-background-indigo blur-3xl"
    ></div>
    <div
      class="absolute top-1/3 -right-24 size-[520px] rounded-full bg-surface-background-fuchsia blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-1/3 size-[520px] rounded-full bg-surface-background-cyan blur-3xl"
    ></div>
  </div>`,
})
export class BackgroundComponent {}
