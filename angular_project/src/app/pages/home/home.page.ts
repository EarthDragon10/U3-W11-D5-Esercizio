import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getActivePosts() {
    this.router.navigate(['/active-posts']);
  }

  getInactivePosts() {
    this.router.navigate(['/inactive-posts']);
  }
}
