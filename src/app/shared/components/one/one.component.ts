import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
 
  // we canto user directly emited data so we have to store it here then use it
  userName !:string
  constructor(private _userService : UsernameService) { }

  ngOnInit(): void {
    this._userService.userNameSub$
    .subscribe(data=>{
      this.userName=data
    })
  }

}
