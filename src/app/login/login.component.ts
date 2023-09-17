import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor(private readonly router: Router, private readonly formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.myForm = this.formBuilder.group<Login>( {
      username: '',
      password: ''
    });
  }

  navigateTo() {
    console.log("as");
    console.log("asd: ", this.myForm.get('username')?.value);
    console.log("asd: ", this.myForm.get('username')?.value.length);

    console.log("asd: ", this.myForm.get('password')?.value);
    console.log("asd: ", this.myForm.get('password')?.value.length);

    this.router.navigate(['/app']);
  }

}
