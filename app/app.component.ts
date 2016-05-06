import { Component, provide, ElementRef, Injector, Renderer} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



import { BlogPostsComponent } from './blogposts.component';
import { EditBlogComponent } from './editblog.component';
import { BlogPostService } from './blogpost.service';

@Component({
  selector: 'my-app',
  template: `<div class="appholder">
  <a href="/blogposts">
  <div class='row fixedheader'>
      <h1 class='col-lg-11'>{{title}}</h1> <div class='col-lg-1'> <div class='poweredby'>Powered By</div> <img class='angularimg' src='https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/10575/large/1455562305/angular-2-2.png'></div>
  </div>
  </a>
    <div class='row'>
    <router-outlet class='col-lg-12 blogholder'></router-outlet>
    </div>
        </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    BlogPostService
    
  ]
})
@RouteConfig([
  {
    path: '/edit/:id',
    name: 'EditBlog',
    component: EditBlogComponent
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

