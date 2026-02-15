import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: 'header.html',
})
export class HeaderComponent {
  mobileOpen = signal(false);
  githubUrl = input<string>('https://github.com/aaron168ready');
}
