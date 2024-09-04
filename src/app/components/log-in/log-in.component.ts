import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  username = '';
  password = '';

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  async signIn() {
    await this.auth.login(this.username, this.password);
    await this.router.navigate(['/book-store']);
  }
}
