import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure :false 
})
export class SearchPipe implements PipeTransform {
  
  transform(value: any, name:string)  {
    // debugger
    console.log('name--',name);
    
    if(name===''){
      return value;
    }

    
    return value.filter((employee:any) => {
      console.log('employee--',employee.firstName.startsWith(name));
      return employee.firstName.startsWith(name)
     });
  }
  
}
 