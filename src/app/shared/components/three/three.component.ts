import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  userName!: string;

  constructor(private _userService: UsernameService) {}

  ngOnInit(): void {
    this._userService.userNameSub$.subscribe((data) => {
      this.userName = data;
    });
  }
}
