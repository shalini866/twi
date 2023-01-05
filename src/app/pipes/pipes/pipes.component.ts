import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  day = new Date();
  num = 223399.77882;
  num1= 0.66; 
  
  form: FormGroup;
  convertFrom: any;
  convertTo: any;
  convert: any;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      temperature: ['', Validators.required],
      userInput:['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }
  
  public nameString = '';
 public employees = [{
      firstName: 'Rohit',
      lastName: 'Sharma',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2012-04-22')
    },
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      dept: 'Sales',
      salary: 6000,
      doj: new Date('2016-09-16')
    },
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03')
    }
  ]
 
  addUser(){
    this.employees.push({
      firstName: 'Rahul',
      lastName: 'Yadav',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2016-11-19')
    })
  }
  onClick(e: any) {
    console.log('vvv',e);

    // let event = new TemparaturePipe();
    // event.transform(e);
    // console.log('event.transform(e)--',event.transform(e));
    


    var splitted = e.userInput.split(" "); 
    this.convertTo = e.temperature;
    this.convertFrom = splitted[1];
    this.convert = splitted[0];
    console.log('++++++',this.convert);
    
   }
} 

