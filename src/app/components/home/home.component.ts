import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectButton() {
    this.router.navigateByUrl('/mat-button');
  }

  selectTypography() {
    this.router.navigateByUrl('/mat-typography');
  }
  
  selectButtonToggle() {
    this.router.navigateByUrl('/mat-buttonToggle');
  }

  selectIcon() {
    this.router.navigateByUrl('/mat-icon');
  }

  selectBadges() {
    this.router.navigateByUrl('/mat-badges');
  }
}
