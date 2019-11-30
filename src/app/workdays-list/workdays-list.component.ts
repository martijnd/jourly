import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkDay} from '../shared/workday.model';
import {Observable} from 'rxjs';
import {WorkdayService} from '../services/workday.service';

@Component({
  selector: 'app-workdays-list',
  templateUrl: './workdays-list.component.html',
  styleUrls: ['./workdays-list.component.scss']
})
export class WorkdaysListComponent implements OnInit {
  @Input() showForm;
  @Output() closeForm = new EventEmitter<void>();
  workdays: WorkDay[] = [];
  showDeleteWorkdayModal = false;
  toDeleteWorkday: WorkDay;

  constructor(private readonly workdayService: WorkdayService) {

  }

  onSubmitForm(workday: WorkDay) {
    if (this.workdayService.currentEditingWorkday) {
      this.workdayService.editWorkday(workday).then(() => {
        console.log('edited workday');
        this.workdayService.currentEditingWorkday = null;
        this.closeForm.emit();
      });
    } else {
      this.workdayService.addWorkday(workday)
        .then(() => this.closeForm.emit()).catch(err => console.log(err));
    }
  }

  onShowDeleteModal(workday) {
    this.toDeleteWorkday = workday;
    this.showDeleteWorkdayModal = true;
  }

  onClose() {
    this.toDeleteWorkday = null;
    this.showDeleteWorkdayModal = false;
  }

  onEditWorkday(workday: WorkDay) {
    this.workdayService.currentEditingWorkday = workday;
    this.showForm = true;
  }

  onDeleteWorkday(workday: WorkDay) {
    this.workdayService.deleteWorkday(workday)
      .then(() => console.log(`Werkdag van ${workday.date} succesvol verwijderd!`))
      .catch(error => alert(error));

    this.showDeleteWorkdayModal = false;
  }

  ngOnInit() {
    this.workdayService.fetchWorkdays().subscribe((workdayList) => {
      this.workdays = workdayList;
    });
  }

}
