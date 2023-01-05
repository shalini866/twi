import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  public name = '';
  public mark = '';
  dataFromParent: any;
  @Input()
  get objData(): any {
     return this.dataFromParent;
  }
  set objData(event: any) {
    console.log('the evnt is given as:', event);
    this.dataFromParent = event;
    this.name = event.name;
    this.mark = event.mark;
  }

  @Output() dataUpdateEvent: any = new EventEmitter<string>();
  newItemEvent: any;
  inputname: any;
  inputmark: any;
  inputobj: any;
  constructor() { 

  } 
   
  ngOnInit(): void {
    console.log('the obj data is given as:', this.objData);
    
  }
  TransferData(){
    console.log('the name and mark is given as:', this.name, this.mark);
    const obj = {
      name: this.name,
      mark: this.mark
    }; 
    this.dataUpdateEvent.emit(obj);
  }
  
}
  