import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss'],
})
export class SubFormComponent implements OnInit {
  @ViewChild('userNameForm') userNameForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  private _userService = inject(UsernameService);

  onSubmit() {
    if (this.userNameForm.valid) {
      let val = this.userNameForm.value;
      console.log(val);
      this.userNameForm.reset();
      // this._userService.userNameSub$.next(val.username);
      this._userService.setUserName(val.username);
    }
  }
}
