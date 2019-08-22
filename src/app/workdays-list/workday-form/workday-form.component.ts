import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WorkDay} from '../../services/workday.model';

import marked from 'marked';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-workday-form',
  templateUrl: './workday-form.component.html',
  styleUrls: ['./workday-form.component.scss']
})
export class WorkdayFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<WorkDay>();
  @Input() showForm: boolean;
  compiledMarkdown;
  form: FormGroup;
  date = new Date();

  constructor() {
  }

  compileMarkdown = (value: string): string => marked(value);

  onTextAreaChange(description) {
    this.compiledMarkdown = DOMPurify.sanitize(this.compileMarkdown(description));
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      date: new FormControl(null,),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

}
