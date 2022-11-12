import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  templateUrl: './inactive-posts.page.html',
  styleUrls: ['./inactive-posts.page.scss'],
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];
  constructor(private postsService: PostsService) {}

  async ngOnInit() {
    this.postsService.getPosts().subscribe((data) => (this.posts = data));
    console.log(this.posts);
  }

  onActivePost(id: number, i: number) {
    this.postsService
      .updatePost({ active: true }, id)
      .subscribe((data) => console.log(data));

    this.posts.splice(i, 1);
  }
}
