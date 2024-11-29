import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MedlemService} from '../medlem.service';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {

  constructor(private readonly medlemService: MedlemService) {
  }

  arInloggad:boolean = false;
  arAdmin:boolean = false;
  arMedlem:boolean = false;
  arStyrelsemedlem:boolean = false;

  ngOnInit(): void {
    this.arInloggad = this.medlemService.arInloggad();
    this.arAdmin = this.medlemService.arAdmin();
    this.arMedlem = this.medlemService.arMedlem();
    this.arStyrelsemedlem = this.medlemService.arStyrelsemedlem();
  }

  loggaUt():void {
    this.medlemService.loggaUt();
    this.arInloggad= false;
    this.arAdmin = false;
    this.arMedlem = false;
    this.arStyrelsemedlem = false;
  }


}
