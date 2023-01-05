import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temparature'
})
export class TemparaturePipe implements PipeTransform {

  transform(value: any, convertTo: any ,convertFrom:any) {
    console.log('value',typeof value);
    console.log('convertTo',convertTo);
    console.log('convertFrom',convertFrom);

    if (convertTo === 'F') {

      if  ( convertFrom !== 'F') {
        var temperature = (value - 32) /1.8 ;
        return parseFloat(temperature.toString()).toFixed(1); // c to f
      }
      return parseFloat(value .toString()).toFixed(1);
      // var temperature = (value * 1.8 ) + 32
      //        return temperature.toFixed(1);
    } else {
      if(convertFrom === 'F'){
        var temperature = (value * 1.8 ) + 32
        return parseFloat(temperature.toString()).toFixed(1); // f to c

      }
      return parseFloat(value .toString()).toFixed(1);
    }

    
    
    
  //   if(value && !isNaN(value)) {
  //     if (unit === 'C') {
  //         var temperature = (value - 32) /1.8 ;
  //         return temperature.toFixed(1);
  //     } else if (unit === 'F'){
  //         var temperature = (value * 1.8 ) + 32
  //         return temperature.toFixed(1);
  //     }
  // }

}
}
