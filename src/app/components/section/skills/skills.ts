import { Component } from '@angular/core';
import { SkillGroup, skillGroups } from '../../../pages/landing/skills';

@Component({
  selector: 'app-skills',
  templateUrl: 'skills.html',
})
export class SkillsComponent {
  skills: SkillGroup[] = skillGroups;
}
