import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MedlemService } from '../medlem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private readonly medlemServie: MedlemService,
    private router: Router) {}

  epost: string = '';
  password: string = '';
  errorMessage: string = '';

  async hanteraSubmit() {

    if(!this.epost || !this.password) {
      this.showError("Du måste ange epost och lösenord.");
      return
    }

    try {
      const response = await this.medlemServie.loggaIn(this.epost, this.password);
      if(response.statusCode === 200) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('roll', response.role)
        this.router.navigate(['/medlemsprofil'])
      } else {
        this.showError(response.meddelande)
      }

    } catch(error: any) {
      this.showError(error.message)
    }

  }

  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }
}
