import { Component, computed, input, InputSignal, signal } from '@angular/core';

export type EmploymentStatusType = 'available' | 'unavailable' | 'busy';

@Component({
  selector: 'app-employment-status',
  templateUrl: 'employment-status.html',
})
export class EmploymentStatus {
  status = input<EmploymentStatusType>('available');
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
