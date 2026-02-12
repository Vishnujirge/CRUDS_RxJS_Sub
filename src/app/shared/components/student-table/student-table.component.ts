import { Component, OnInit } from '@angular/core';
import { Istd } from '../../module/stdT';
// import { stdArr } from '../../const/stdArr';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { SearchService } from '../../services/search-service.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  // stdArr: Istd[] = stdArr;

  // stdArr: Istd[] = [];
  // filteredArr: Istd[] = [];

  stdArr: Istd[] = [];
  filteredArr: Istd[] = [];

  constructor(
    private dialog: MatDialog,
    private searchService: SearchService,
    private studentService: StudentService,
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

  // filteredArr: Istd[] = [];

  //   ngOnInit() {

  //     this.stdArr = stdArr;
  //     this.filteredArr = stdArr;

  //     this.searchService.getSearch().subscribe(value => {
  //       this.filteredArr = this.stdArr.filter(std =>
  //         std.fname.toLowerCase().includes(value) ||
  //         std.lname.toLowerCase().includes(value) ||
  //         std.email.toLowerCase().includes(value) ||
  //         std.contact.toString().includes(value)
  //       );
  //     });
  // }

  // ngOnInit() {

  //   this.studentService.getStudents().subscribe(res => {

  //     // this.stdArr = res || [];
  //     this.filteredArr = this.stdArr;

  //     this.searchService.getSearch().subscribe(value => {
  //       const searchValue = value.toLowerCase();

  //       this.filteredArr = this.stdArr.filter(std =>
  //         std.fname?.toLowerCase().includes(searchValue) ||
  //         std.lname?.toLowerCase().includes(searchValue) ||
  //         std.email?.toLowerCase().includes(searchValue) ||
  //         std.contact?.toString().includes(searchValue)
  //       );
  //     });

  //   });

  // }

  // ngOnInit() {

  //   this.studentService.getStudents().subscribe(res => {

  //     console.log(res); // Keep this for debugging

  //     this.stdArr = res || [];
  //     this.filteredArr = this.stdArr;

  //   });

  // }



  ngOnInit() {
  this.studentService.getStudents().subscribe(res => {
    this.stdArr = res || [];
    this.filteredArr = this.stdArr;
  
  });
}

  loadStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.stdArr = res || [];
      this.filteredArr = this.stdArr;
    });
  }

  setupSearch() {
    this.searchService.getSearch().subscribe((value) => {
      const searchValue = value.toLowerCase();

      this.filteredArr = this.stdArr.filter(
        (std) =>
          std.fname?.toLowerCase().includes(searchValue) ||
          std.lname?.toLowerCase().includes(searchValue) ||
          std.email?.toLowerCase().includes(searchValue) ||
          std.contact?.toString().includes(searchValue),
      );
    });
  }

  openDeleteDialog(student: Istd) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.stdArr = this.stdArr.filter((s) => s !== student);
        this.filteredArr = this.filteredArr.filter((s) => s !== student);
      }
    });
  }
}
