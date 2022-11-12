import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  sub!: Subscription;
  post!: Post | undefined;

  constructor(
    private router: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params) => {
      const id = +params['id'];

      this.postService.getPost(id).subscribe((data) => (this.post = data));
    });
  }
}
