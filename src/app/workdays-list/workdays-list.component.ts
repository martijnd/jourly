import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {WorkDay} from '../services/workday.model';
import {Observable, of} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {User} from '../services/user.model';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-workdays-list',
  templateUrl: './workdays-list.component.html',
  styleUrls: ['./workdays-list.component.scss']
})
export class WorkdaysListComponent implements OnInit {
  workdays$: Observable<WorkDay[]>;

  constructor(private afs: AngularFirestore, auth: AuthService) {
    this.workdays$ = auth.user$.pipe(switchMap(user => {
      if (user) {
        return afs.doc<User>(`users/${user.uid}`).collection<WorkDay[]>('workdays').valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  // addWorkday(workday: WorkDay) {
  //   this.workdaysCollection.add(workday);
  // }

  ngOnInit() {
  }

}
