import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value:number,exponent : number,b : number): number {
    return Math.pow(value,exponent) + b ;
  }

}
