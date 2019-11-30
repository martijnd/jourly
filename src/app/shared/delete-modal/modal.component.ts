import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WorkDay} from '../workday.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() workday: WorkDay;
  @Output() closed = new EventEmitter<void>();
  @Output() accepted = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }

  onAccept() {
    this.accepted.emit();
  }
}
