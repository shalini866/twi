import { Component, } from '@angular/core';


@Component({
  selector: 'app-wrk',
  templateUrl: './wrk.component.html',
  styleUrls: ['./wrk.component.scss']
})
export class WrkComponent {
  inputname:any;
  inputmark:any;
  public name = '';
  public mark = '';
  public inputobj:any
   public objdata:any
  title: any;
  ngModel: any;
  obj: any;
  objValue = {};   


  
  getDataFromChild(event: any) {
    console.log('the data received from child is given as:', event);
    this.name = event.name;
    this.mark = event.mark;
  }

  TransferData() {
    this.objValue = {
      name: this.name,
      mark: this.mark 
    }
    console.log('the obj value is given as:', this.objValue);
    

  }
} 
  