import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  searchConfig = {
    ...environment.algolia,
    indexName: 'jourly'
  };

  showResults = false;

  constructor(public auth: AuthService) {
  }

  searchchanged(query) {
    this.showResults = !!query.length;
  }


  setToggleForm() {
    this.showForm = !this.showForm;
  }
}
