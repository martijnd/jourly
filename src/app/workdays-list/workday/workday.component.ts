import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkDay} from '../../services/workday.model';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.scss']
})
export class WorkdayComponent implements OnInit {
  @Input() workday: WorkDay;
  @Output() deleteWorkday = new EventEmitter<WorkDay>();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete(workday) {
    this.deleteWorkday.emit(workday);
  }

}
