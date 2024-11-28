import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MedlemService } from '../medlem.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private readonly medlemServie: MedlemService) {
  }

  epost: string = '';
  password: string = '';
  errorMeddelande: string = '';

  async hanteraSubmit() {

    if(!this.epost || !this.password) {
      this.showError("Du måste ange epost och lösenord.");
      return
    }

    try {
      const bulle = '';

    } catch(error: any) {
      this.showError(error.message)
    }

  }

  showError(mess: string) {
    this.errorMeddelande = mess;
    setTimeout(() => {
      this.errorMeddelande = ''
    }, 3000)
  }
}
