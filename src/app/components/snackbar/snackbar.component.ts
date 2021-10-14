import { Component, OnInit } from '@angular/core';

// snackbar
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // snackbar
  openSnackBar = (message: any) => {
    this.snackBar.open(message);
  }

  openSnackBarAction = (message: any, action: any) => {
    this.snackBar.open(message, action);
  }

}
