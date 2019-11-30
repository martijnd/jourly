import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {WorkDay} from '../shared/workday.model';
import {switchMap} from 'rxjs/operators';
import {User} from '../shared/user.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkdayService {

  workdaysCollection: AngularFirestoreCollection<WorkDay>;
  currentEditingWorkday: WorkDay | null = null;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
  }

  fetchWorkdays() {
    return this.auth.user$.pipe(switchMap(user => {
      if (user) {
        this.workdaysCollection = this.afs.doc<User>(`users/${user.uid}`)
          .collection<WorkDay>('workdays', ref => ref.orderBy('date', 'desc'));
        return this.workdaysCollection.valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  addWorkday(workday: WorkDay): Promise<void> {
    const workdayId = this.afs.createId();
    if (!workday.date) {
      workday = {...workday, date: new Date().toISOString().split('T')[0]};
    }
    return this.workdaysCollection.doc(workdayId).set({
      uid: workdayId,
      ...workday
    });
  }

  editWorkday(workday: WorkDay) {
    return this.workdaysCollection.doc(this.currentEditingWorkday.uid).update(workday);
  }

  deleteWorkday(workday: WorkDay) {
    return this.workdaysCollection.doc(workday.uid).delete();
  }
}
