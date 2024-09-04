import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css'],
})
export class BookStoreComponent implements OnInit {
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  async logOut() {
    await this.auth.logout();
    await this.router.navigate(['/']);
  }
}
