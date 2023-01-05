import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() myinputMsg!: string;
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  // OutputMessage:string = "I am child component."
constructor(){}

ngOnInit(): void {
  console.log(this.myinputMsg);
  this.myOutput.emit(this.myinputMsg);
}
}
 
