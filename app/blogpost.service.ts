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

  getBlogPost(id: number) {
    return Promise.resolve(BLOGPOSTS).then(
          blogposts => blogposts.filter(blogpost => blogpost.id === id)[0]
    );
  }
  
 //   getHero(id: number) {
  //  return Promise.resolve(HEROES).then(
  //    heroes => heroes.filter(hero => hero.id === id)[0]
  //  );
  // }
}

