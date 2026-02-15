import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './pages/layout/background/background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
