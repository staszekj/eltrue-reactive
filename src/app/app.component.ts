import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'el-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  template: `
    <!--
    <nav>
      <a [routerLink]=" ['./'] "
         routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        Index
      </a>
    </nav>
    -->

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppService) {
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
