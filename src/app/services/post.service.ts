import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("https://jsonblob.com/api/72c08754-bd0b-11e8-9ff5-3dcfbb284439");
    }

  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  // getPostUpdateListener() {
  //   return this.postsUpdated.asObservable();
  // }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    console.log(post);
    console.log(this.posts);
    //this.postsUpdated.next([...this.posts]);
  }

}
