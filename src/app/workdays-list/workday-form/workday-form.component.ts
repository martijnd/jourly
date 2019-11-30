import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WorkDay} from '../../shared/workday.model';

import marked from 'marked';
import DOMPurify from 'dompurify';
import {WorkdayService} from '../../services/workday.service';

@Component({
  selector: 'app-workday-form',
  templateUrl: './workday-form.component.html',
  styleUrls: ['./workday-form.component.scss']
})
export class WorkdayFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<WorkDay>();
  @Input() showForm: boolean;
  workday: WorkDay = null;
  compiledMarkdown;
  form: FormGroup;
  date = new Date();

  constructor(private readonly workdayService: WorkdayService) {
  }

  compileMarkdown = (value: string): string => marked(value);

  onTextAreaChange(description) {
    this.compiledMarkdown = DOMPurify.sanitize(this.compileMarkdown(description));
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
    this.workday = null;
  }

  ngOnInit() {
    this.workday = this.workdayService.currentEditingWorkday;
    if (!this.workday) {
      this.form = new FormGroup({
        date: new FormControl(null),
        description: new FormControl(null, Validators.required),
        category: new FormControl(null, Validators.required)
      });
    } else {
      this.form = new FormGroup({
        date: new FormControl(this.workday.date),
        description: new FormControl(this.workday.description, Validators.required),
        category: new FormControl(this.workday.category, Validators.required)
      });

      this.onTextAreaChange(this.workday.description);
    }
  }

}
