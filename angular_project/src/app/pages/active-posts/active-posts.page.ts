import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  templateUrl: './active-posts.page.html',
  styleUrls: ['./active-posts.page.scss'],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];

  constructor(private postsService: PostsService) {}

  async ngOnInit() {
    this.postsService.getPosts().subscribe((data) => (this.posts = data));
  }

  onInactivePost(id: number, i: number) {
    this.postsService
      .updatePost({ active: false }, id)
      .subscribe((data) => console.log(data));

    this.posts.splice(i, 1);
  }
}
