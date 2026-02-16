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
}
