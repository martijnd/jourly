import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WorkDay} from '../../services/workday.model';

@Component({
  selector: 'app-workday-form',
  templateUrl: './workday-form.component.html',
  styleUrls: ['./workday-form.component.scss']
})
export class WorkdayFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<WorkDay>();
  form: FormGroup;
  showForm = false;

  constructor() {
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
    this.form = new FormGroup({
      date: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

}