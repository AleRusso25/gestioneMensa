import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Registrazione completata! Ora puoi effettuare il login.');
        this.router.navigate(['/login']); // Reindirizza al login dopo la registrazione
      },
      error: (err) => console.error('Errore registrazione:', err),
    });
  }
}

