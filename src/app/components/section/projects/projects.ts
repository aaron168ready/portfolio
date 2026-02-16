import { Component } from '@angular/core';
import { Project, projects } from './project-lists';
import { DynamicIconDirective } from '../../../directives/dynamic-icon/dynamic-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.html',
  imports: [CommonModule, DynamicIconDirective],
})
export class ProjectsComponent {
  projects: Project[] = projects;

  renderDemo(href?: string) {
    if (!href || href === '#') return;
    const landingMain = document.getElementById('landing-main') as HTMLElement | null;
    if (!landingMain) return;

    // inject global styles for the overlay once
    if (!document.getElementById('demo-overlay-styles')) {
      const s = document.createElement('style');
      s.id = 'demo-overlay-styles';
      s.textContent = `
        #top.demo-slide-left { transform: translateX(-100%); transition: transform 400ms ease; }
        #demo-overlay { position: fixed; inset: 0; pointer-events: none; z-index: 10000; }
        #demo-container { position: absolute; top: 0; right: 0; width: 100%; max-width: 100%; height: 100%; transform: translateX(100%); transition: transform 400ms ease; pointer-events: auto; background: rgba(2,6,23,0.95); display: flex; flex-direction: column; }
        #demo-container.demo-in { transform: translateX(0); }
        #demo-iframe { flex: 1 1 auto; width: 100%; border: 0; }
        #demo-toolbar { padding: 8px; display: flex; justify-content: flex-end; gap: 8px; }
        #demo-close { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.08); padding: 6px 10px; border-radius: 6px; cursor: pointer; }
      `;
      document.head.appendChild(s);
    }

    // slide `top` left
    landingMain.classList.add('demo-slide-left');

    // create overlay if missing
    let overlay = document.getElementById('demo-overlay') as HTMLElement | null;
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'demo-overlay';

      const container = document.createElement('div');
      container.id = 'demo-container';

      const toolbar = document.createElement('div');
      toolbar.id = 'demo-toolbar';
      const closeBtn = document.createElement('button');
      closeBtn.id = 'demo-close';
      closeBtn.textContent = 'Close';
      toolbar.appendChild(closeBtn);

      const iframe = document.createElement('iframe');
      iframe.id = 'demo-iframe';
      iframe.src = href || '';

      container.appendChild(toolbar);
      container.appendChild(iframe);
      overlay.appendChild(container);
      document.body.appendChild(overlay);

      // allow transitions to apply
      requestAnimationFrame(() => {
        container.classList.add('demo-in');
        container.classList.add('demo-in');
        container.classList.add('demo-in');
      });

      const cleanup = () => {
        container.classList.remove('demo-in');
        landingMain.classList.remove('demo-slide-left');
        // wait for transition then remove overlay
        const onEnd = () => {
          overlay?.remove();
          container.removeEventListener('transitionend', onEnd);
        };
        container.addEventListener('transitionend', onEnd);
      };

      closeBtn.addEventListener('click', () => cleanup());

      // if user clicks outside container, close
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) cleanup();
      });
    } else {
      // overlay already present: just update iframe and slide in
      const container = overlay.querySelector('#demo-container') as HTMLElement | null;
      const iframe = overlay.querySelector('#demo-iframe') as HTMLIFrameElement | null;
      if (iframe && href) iframe.src = href;
      if (container) {
        // ensure it's offscreen then slide in
        container.classList.remove('demo-in');
        requestAnimationFrame(() => container?.classList.add('demo-in'));
      }
    }
  }
}
