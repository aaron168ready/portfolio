import { Component, inject } from '@angular/core';
import { Project, projects } from './project-lists';
import { DynamicIconDirective } from '../../../directives/dynamic-icon/dynamic-icon';
import { CommonModule } from '@angular/common';
import { RouterService } from '../../../services/router.service';
import { DemoService } from '../../../services/demo.service';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.html',
  imports: [CommonModule, DynamicIconDirective],
})
export class ProjectsComponent {
  #routerService = inject(RouterService);
  #demoService = inject(DemoService);

  projects: Project[] = projects;

  routeTo = (href: string) => this.#routerService.routeTo(href);
  renderDemo = (href: string) => this.#demoService.renderDemo(href);
}
