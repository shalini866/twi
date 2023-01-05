import { Component, Input, OnInit } from '@angular/core';
import {  FormControl ,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // public valueOfName = 'Hi'
  @Input('user') userName :string | any;
  registrationForm: FormGroup | any;

   constructor(public routing: Router){ 
    console.log('constructor called')
   }
   ngOnInit(): void {
     this. registrationForm = new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(0)])  
    });
    console.log('UserName',this.registrationForm)
   }
  public login() {
   let userArray =[{
    userName :'Test',
    password : 'test12345',
    type: 'rpm/rpm'
   },
   {
    userName :'regs',
    password : 'test123456',
    type: 'rpm/regs'
   },
   {
    userName :'Bus',
   password : 'SmartWork',
   type: 'patient/patient'
  },
  {
    userName :'Buss',
    password : 'SmartWork123', 
    type: 'patient/test'
  },
  {
    userName :'doc',
    password : 'SmartWork12345',
    type: 'patient/doctor'
  },
  {
    userName: 'test23',
    password: 'SmartWork12345',
    type: 'employee/employee'
  },
  {
    userName: 'test234',
    password: 'SmartWork123456',
    type: 'employee/wrk'
  },
  {
    userName: 'child',
    password: 'childwrk',
    type: 'employee/wrk'
  },
  {
    userName: 'data',
    password: 'data123',
    type: 'data/data'
  },
  {
    userName: 'datachild',
    password: 'datachild1',
    type: 'data/child1'
  },
  {
    userName: 'dataparent',
    password: 'dataparent12',
    type: 'data/parent'
  },
  ]
   userArray .forEach(element => {
    if(element.userName==this.registrationForm.value.userName && element.password == this.registrationForm.value.password)
    this.routing.navigate([`/${element.type}`])
    
   });
    console.log('final value',this.registrationForm.value);
  }
 }


