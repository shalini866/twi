import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
 title = 'app';
 myInputMessage:string = "I am parent component."
 public finalMsg: string | undefined

 GetChildData(data: any){
  console.log(data);
 }
 public getChildMsg(data:any) {

  this.finalMsg = data;
 }
}

