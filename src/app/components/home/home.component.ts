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

  selectProgressSpinner() {
    this.router.navigateByUrl('/mat-progressSpinner');
  }

  selectNavbar() {
    this.router.navigateByUrl('/mat-navbar');
  }

  selectSideNav() {
    this.router.navigateByUrl('/mat-sidenav');
  }

  selectMenu() {
    this.router.navigateByUrl('/mat-menu');
  }

  selectList() {
    this.router.navigateByUrl('/mat-list');
  }

  selectGridList() {
    this.router.navigateByUrl('/mat-gridList');
  }

  selectExpansionPanel() {
    this.router.navigateByUrl('/mat-expansionPanel');
  }

  selectCard() {
    this.router.navigateByUrl('/mat-card');
  }

  selectTab() {
    this.router.navigateByUrl('/mat-tab');
  }

  selectStepper() {
    this.router.navigateByUrl('/mat-stepper');
  }

  selectInput() {
    this.router.navigateByUrl('/mat-input');
  }

  select_SelectModule() {
    this.router.navigateByUrl('/mat-select');
  }

  selectAutoComplete() {
    this.router.navigateByUrl('/mat-autocomplete');
  }

  selectCheckBoxAndRadioButton() {
    this.router.navigateByUrl('/mat-checkBox-radioButton');
  }

  selectDatepicker() {
    this.router.navigateByUrl('/mat-datepicker');
  }

  selectTooltip() {
    this.router.navigateByUrl('/mat-tooltip');
  }
}
