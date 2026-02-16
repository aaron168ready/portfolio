import { Component, computed, input } from '@angular/core';

export type EmploymentStatus = 'available' | 'unavailable' | 'busy';

@Component({
  selector: 'app-employment-status',
  templateUrl: 'employment-status.html',
})
export class EmploymentStatusComponent {
  status = input<EmploymentStatus>('available');
  statusMessage = computed(() => {
    switch (this.status()) {
      case 'available':
        return 'Looking for new opportunities';
      case 'busy':
        return 'Currently busy but open to hearing about interesting roles';
      case 'unavailable':
        return 'Not looking for new opportunities at the moment';
    }
  });
}
