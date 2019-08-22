import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkDay} from '../../services/workday.model';

import marked from 'marked';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.scss']
})
export class WorkdayComponent implements OnInit {
  @Input() workday: WorkDay;
  @Output() showModal = new EventEmitter<WorkDay>();

  parsedDescription: string;

  constructor() {

  }

  onShowModal(workday) {
    this.showModal.emit(workday);
  }

  ngOnInit() {
    this.parsedDescription = marked(this.workday.description);
  }
}
