import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkDay} from '../shared/workday.model';
import {WorkdayService} from '../services/workday.service';

@Component({
  selector: 'app-workdays-list',
  templateUrl: './workdays-list.component.html',
  styleUrls: ['./workdays-list.component.scss']
})
export class WorkdaysListComponent implements OnInit {
  @Input() showForm;
  workdays: WorkDay[] = [];
  showDeleteWorkdayModal = false;
  toDeleteWorkday: WorkDay;

  constructor(private readonly workdayService: WorkdayService) {

  }

  onSubmitForm(workday: WorkDay) {
    if (this.workdayService.currentEditingWorkday) {
      this.workdayService.editWorkday(workday).then(() => {
        this.workdayService.currentEditingWorkday = null;
        this.showForm = false;
      });
    } else {
      this.workdayService.addWorkday(workday)
        .then(() => this.showForm = false).catch(err => console.log(err));
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
