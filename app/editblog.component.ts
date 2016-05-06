import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { BlogPost } from './blogpost';
import { BlogPostService } from './blogpost.service';

@Component({
  selector: 'my-editblog',
  templateUrl: 'app/editblog.component.html',
  styleUrls: ['app/editblog.component.css']
})
export class EditBlogComponent implements OnInit {
  @Input() blogpost: BlogPost;

  constructor(
    private _blogpostService: BlogPostService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.getBlogPost(id);
  }
  
  getBlogPost(id: number) {
     this._blogpostService.getBlogPost(id)
      .then(blogpost => this.blogpost = blogpost);
  }
  
  
  goBack() {
    window.history.back();
  }
}


