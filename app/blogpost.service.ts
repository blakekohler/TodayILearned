import { Injectable } from 'angular2/core';

import { BlogPost } from './blogpost';
import { BLOGPOSTS } from './mock-blogposts';

@Injectable()
export class BlogPostService {
  getBlogPosts() {
    return Promise.resolve(BLOGPOSTS);
  }

  getBlogPostsSlowly() {
    return new Promise<BlogPost[]>(resolve =>
      setTimeout(()=>resolve(BLOGPOSTS), 2000) // 2 seconds
    );
  }

  getBlogPost(id: string) {
    return Promise.resolve(BLOGPOSTS).then(
      BlogPost => BlogPost.filter(BlogPost => BlogPost.id === id)[0]
    );
  }
}
