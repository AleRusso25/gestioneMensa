import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule], 
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']); // Reindirizza alla dashboard dopo il login
        },
        error: (err) => console.error('Errore login:', err),
      });
  }
}
