import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        if (response.token) {
          this.authService.saveToken(response.token);
          this.authService.saveUserRole(response.role); // Salva il ruolo

          this.router.navigate(['/home']); // Reindirizza alla dashboard
        }
      },
      (error) => {
        this.errorMessage = 'Email o password errati';
      }
    );
  }
}
