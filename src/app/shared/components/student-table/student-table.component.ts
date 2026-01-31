import { Component, OnInit } from '@angular/core';
import { Istd } from '../../module/stdT';
import { stdArr } from '../../const/stdArr';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { SearchService } from '../../services/search-service.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  stdArr: Istd[] = stdArr;


constructor(private dialog: MatDialog,
  private searchService: SearchService
) {}

// openDeleteDialog(index: number) {
//   const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
//     width: '350px',
//     disableClose: true
//   });

//   dialogRef.afterClosed().subscribe((result: boolean) => {
//     if (result) {
//       this.stdArr.splice(index, 1);
//     }
//   });
// }




  filteredArr: Istd[] = [];


  ngOnInit() {
    this.stdArr = stdArr;
    this.filteredArr = stdArr;

    this.searchService.getSearch().subscribe(value => {
      this.filteredArr = this.stdArr.filter(std =>
        std.fname.toLowerCase().includes(value) ||
        std.lname.toLowerCase().includes(value) ||
        std.email.toLowerCase().includes(value) ||
        std.contact.toString().includes(value)
      );
    });
}




openDeleteDialog(student: Istd) {
  const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
    width: '350px',
    disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      this.stdArr = this.stdArr.filter(s => s !== student);
      this.filteredArr = this.filteredArr.filter(s => s !== student);
    }
  });
}


}