import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
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
  @Input() showForm;
  workdaysCollection: AngularFirestoreCollection<WorkDay>;
  workdays$: Observable<WorkDay[]>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.workdays$ = auth.user$.pipe(switchMap(user => {
      if (user) {
        this.workdaysCollection = afs.doc<User>(`users/${user.uid}`).collection<WorkDay>('workdays', ref => ref.orderBy('date', 'desc'));
        return this.workdaysCollection.valueChanges();
      } else {
        return of(null);
      }

    }));
  }

  addWorkday(workday: WorkDay) {
    const workdayId = this.afs.createId();
    this.workdaysCollection.doc(workdayId).set({
      uid: workdayId,
      ...workday
    }).then(response => console.log(response)).catch(err => console.log(err));
  }

  onDeleteWorkday(workday: WorkDay) {
    this.workdaysCollection.doc(workday.uid).delete()
      .then(() => console.log('Werkdag van ', workday.date, 'succesvol verwijderd!'))
      .catch(error => alert(error));
  }

  ngOnInit() {
  }

}
