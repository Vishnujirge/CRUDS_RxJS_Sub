import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
 
  // we canto user directly emited data so we have to store it here then use it
  userName !:string
  constructor() { }

  ngOnInit(): void {
  }

}
