import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { DynamicIconDirective } from '../../directives/dynamic-icon/dynamic-icon';

@Component({
  selector: 'app-cry-audio-button-renderer',
  imports: [DynamicIconDirective],
  template: `<button (click)="playCry()"><i dynamic-icon iconName="volumnup"></i></button>`,
})
export class AudioButtonRenderer implements ICellRendererAngularComp {
  audioUrl: any;
  #audio = new Audio();
  agInit(params: ICellRendererParams): void {
    this.audioUrl = params.data.cries;
    this.refresh(params);
  }
  refresh(params: ICellRendererParams) {
    return true;
  }
  playCry() {
    this.#audio.src = this.audioUrl;
    this.#audio.play();
  }
}
