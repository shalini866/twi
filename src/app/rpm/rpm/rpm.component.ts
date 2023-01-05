import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
//import { RegsComponent } from '../regs/regs.component';

@Component({
  selector: 'app-rpm',
  templateUrl: './rpm.component.html',
  styleUrls: ['./rpm.component.scss']
})
export class RpmComponent {
  title = 'form-array';
  usersForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.usersForm = this.fb.group({ 
    users: this.fb.array([])
    })
}
ngOnInit() {
  this.addUser();
}

get users() {
  return this.usersForm.get('users') as FormArray;
}

newPatient(): FormGroup {
  return this.fb.group({
    firstName:'',
    lastName:'',
    phoneNumber:''
  })
}
addUser() {
  this.users.push(this.newPatient());
  console.log(this.users.value);
}
removeUser(index: number) {
  this.users.removeAt(index);
  console.log(this.users.value);
} 
}
