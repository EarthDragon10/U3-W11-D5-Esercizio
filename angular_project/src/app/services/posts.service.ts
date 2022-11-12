import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    console.log({ posts: this.posts });

    return this.http.get<Post[]>(environment.urlAPI + 'posts');
  }

  getPost(id: number) {
    return this.http.get<Post>(environment.urlAPI + 'posts/' + id);
  }

  updatePost(data: Partial<Post>, id: number) {
    return this.http.patch<Post>(environment.urlAPI + 'posts/' + id, data);
  }
}
