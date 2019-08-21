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
  @Output() deleteWorkday = new EventEmitter<WorkDay>();

  parsedDescription: string;

  constructor() {

  }

  ngOnInit() {
    this.parsedDescription = marked(this.workday.description);
  }

  onDelete(workday) {
    this.deleteWorkday.emit(workday);
  }

}
