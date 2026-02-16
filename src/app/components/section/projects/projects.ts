import { Component } from '@angular/core';
import { Project, projects } from '../../../pages/landing/projects';
import { DynamicIconDirective } from '../../../directives/icon/dynamic-icon';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.html',
  imports: [DynamicIconDirective],
})
export class ProjectsComponent {
  projects: Project[] = projects;
}
