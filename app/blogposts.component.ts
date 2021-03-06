import { Component, OnInit, provide, ElementRef, Injector, Renderer} from 'angular2/core';
import { Router } from 'angular2/router';


import { BlogPost } from './blogpost';
//import { HeroDetailComponent } from './hero-detail.component';
import { BlogPostService } from './blogpost.service';

@Component({
  selector: 'my-blogposts',
  templateUrl: 'app/blogposts.component.html',
  styleUrls:  ['app/blogposts.component.css'],
 // directives: [HeroDetailComponent]
})
export class BlogPostsComponent implements OnInit {
  blogposts: BlogPost[];
  selectedBlogPost: BlogPost;

  constructor(
    private _router: Router,
    private _blogpostService: BlogPostService,
    private elementRef: ElementRef,
                private injector: Injector, private _renderer: Renderer) {}
  getBlogPosts() {
    this._blogpostService.getBlogPosts().then(blogposts => this.blogposts = blogposts);
  }

  ngOnInit() {
    this.getBlogPosts();
  }

  onSelect(blogpost: BlogPost) { this.selectedBlogPost = blogpost; }

  gotoDetail(id : number) {
    this._router.navigate(['EditBlog', { id }]);
  }
}
