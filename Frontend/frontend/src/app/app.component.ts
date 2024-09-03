import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <app-toolbar></app-toolbar>
    <app-core-main>
      <router-outlet></router-outlet>
    </app-core-main>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  title = `'Workin'out'`;
  currentPage: string = '';
  routerSubscription: Subscription | undefined;
  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url;
        }
      }
    );
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  protected readonly open = open;
}
