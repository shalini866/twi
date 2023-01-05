import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regs',
  templateUrl: './regs.component.html',
  styleUrls: ['./regs.component.scss']
})
export class RegsComponent {
  title = 'Temparature';
  convert = 0;
  form: FormGroup; 
  convertFrom: any;
  convertTo: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      temperature: ['', Validators.required],
      userInput:['', Validators.required]
    });
  }
   
  onClickSubmit(e:any){ 
    console.log(e.userInput);
    var splitted = e.userInput.split(" "); 
    console.log('this splitted is given as:', splitted);
    const convertTo = e.temperature;
    const convertFrom = splitted[1];

    if (convertTo == 'Celcius') {
      if (convertFrom == "C") {
        this.convert = splitted[0];
      } else {
        var output = 5 / 9 * (splitted[0] - 32);
        console.log(output);
        this.convert = output;
      }
    }

    if(convertTo == 'Fahrenheit') {
      if (convertFrom == "F") {
        this.convert = splitted[0];
      } else {
        var output = splitted[0] * (9/5) + 32;
        console.log(output);
        this.convert = output;
      }
    }
 }

 onClick(e: any) {
  console.log('vvv',e);
  var splitted = e.userInput.split(" "); 
  this.convertTo = e.temperature;
  this.convertFrom = splitted[1];
  this.convert = splitted[0];
  console.log('',this.convert);
  
 }
  
}
 