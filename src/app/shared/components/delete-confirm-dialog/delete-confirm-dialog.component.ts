// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-delete-confirm-dialog',
//   templateUrl: './delete-confirm-dialog.component.html',
//   styleUrls: ['./delete-confirm-dialog.component.scss']
// })
// export class DeleteConfirmDialogComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent {

  password = '';
  error = false;

  private readonly DELETE_PASSWORD = '1234';

  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>) {}

  confirm() {
    if (this.password === this.DELETE_PASSWORD) {
      this.dialogRef.close(true);
    } else {
      this.error = true;
    }
  }

  close() {
    this.dialogRef.close(false);
  }
}
