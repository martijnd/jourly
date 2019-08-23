import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subscription} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

interface ICommitData {
  sha: string;
  message: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggleForm = new EventEmitter();
  loading = true;
  private gitHubApiUrl = 'https://api.github.com/repos/martijnd/jourly/commits';

  latestCommit$: Observable<ICommitData>;

  constructor(public auth: AuthService, private http: HttpClient) {
    auth.user$.subscribe(() => {
      this.loading = false;
    });

    this.getCommitData();
  }

  getCommitData() {
    this.latestCommit$ = this.http.get<ICommitData>(this.gitHubApiUrl).pipe(map(value => {
        return {
          sha: value[0].sha.substring(0, 6),
          message: value[0].commit.message,
          url: value[0].html_url
        };
      })
    );
  }

  onToggleForm() {
    this.toggleForm.emit();
  }

  ngOnInit() {

  }

}
