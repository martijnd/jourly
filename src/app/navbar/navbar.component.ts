import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggleForm = new EventEmitter();
  loading = true;

  constructor(public auth: AuthService) {
    auth.user$.subscribe(() => {
      this.loading = false;
    });
  }

  onToggleForm() {
    this.toggleForm.emit();
  }

  ngOnInit() {

  }

}
