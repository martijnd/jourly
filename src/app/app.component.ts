import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  setToggleForm() {
    this.showForm = !this.showForm;
    console.log(this.showForm);
  }

  constructor(private auth: AuthService) {
  }

}
