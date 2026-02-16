import { Component, input } from '@angular/core';
import { DynamicIconDirective } from '../../../directives/dynamic-icon/dynamic-icon';

@Component({
  selector: 'app-footer',
  imports: [DynamicIconDirective],
  templateUrl: 'footer.html',
})
export class FooterComponent {
  year = new Date().getFullYear();
  githubUrl = input<string>('https://github.com/aaron168ready');
  linkedinUrl = input<string>('https://linkedin.com/in/zni');
}
