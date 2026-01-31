import { Component, OnInit } from '@angular/core';
import { Istd } from '../../module/stdT';
import { stdArr } from '../../const/stdArr';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  stdArr: Istd[] = stdArr;

  // = [
  //   {
  //     fname: 'Vishnu ',
  //     lname: 'Jirge',
  //     contact: 9970126541,
  //     email: 'vishnu@gmail.com',
  //   },
  //   {
  //     fname: 'Ganesh',
  //     lname: 'Bhalke',
  //     contact: 9123456789,
  //     email: 'ganesh@gmail.com',
  //   },
  // ];

  constructor() {}

  ngOnInit(): void {}
}
