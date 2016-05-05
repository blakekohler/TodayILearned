import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { BlogPostsComponent } from './blogposts.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { BlogPostService } from './blogpost.service';

@Component({
  selector: 'my-app',
  template: `
  <div class='row'>
    <h1 class='col-lg-11'>{{title}}</h1> <div class='col-lg-1'> <div class='poweredby'>Powered By</div> <img class='angularimg' src='https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/10575/large/1455562305/angular-2-2.png'></div>
  </div>
  <div class='row'>
    <router-outlet class='col-lg-12'></router-outlet>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    BlogPostService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
   
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/blogposts',
    name: 'BlogPosts',
    component: BlogPostsComponent,
     useAsDefault: true
  }
])
export class AppComponent {
  title = 'Today I learned';

}
