import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserListResponse, UserResponse, UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: User[] = undefined as any;
  user: UserResponse = undefined as any;
  formGroup: FormGroup;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder) {
      this.userService.getUsers().subscribe(
        resp => this.usersList = resp.data
      );

      this.formGroup = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        job: new FormControl('', Validators.required)
      });
  }

  ngOnInit(): void {
  }

  submit(): void {
    const reqBody = { 
      name: this.formGroup.controls['name'].value, 
      job: this.formGroup.controls['job'].value
    };
    this.userService.addUser(reqBody).subscribe(
      resp => alert(JSON.stringify(resp))
    );
  }

  submit2() {
    console.log(this.formGroup)
  }

}
