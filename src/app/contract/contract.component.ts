import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  standalone:true,
  imports: [
    MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule
  ]
})
export class ContractComponent implements OnInit  {
  NgForm = NgForm;
  loginForm: FormGroup | undefined;
  FormData!: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  Body: any;
EmailAddress: any;


  constructor(private builder: FormBuilder) {

   }
  ngOnInit(): void {

    this.FormData = new FormGroup({
      'id' : new FormControl(0),
      'clientee' : new FormControl(),
      'EmailAddress' : new FormControl('',[Validators.required,Validators.minLength(10)]),
      'Body' : new FormControl('',[Validators.required,Validators.minLength(10)]),

    });

    /*this.loginService.login(this.username, this.password).subscribe(data => {


    }*/
  }



}
