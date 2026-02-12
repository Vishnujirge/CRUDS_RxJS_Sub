import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  userName !:string

  constructor(
    private _userService : UsernameService
  ) { }

  ngOnInit(): void {
    // this._userService.userNameSub$
    // .subscribe(data=>{
    //   this.userName=data;
    // })

    this._userService.userNameSubObs$.subscribe(data => this.userName=data)
  }
  

}
