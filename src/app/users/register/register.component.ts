import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userData' : new FormGroup({
        'firstName' : new FormControl("", Validators.required),
        'lastName' : new FormControl("", Validators.required),
      }),
      'email' : new FormControl("", [Validators.required, Validators.email]),
      'password' : new FormControl("", Validators.required)
    })
  }

  onRegisterFormSubmit() {
    console.log(this.registerForm)
  }

}
