import { Pipe, PipeTransform } from '@angular/core';
// import { Venture } from './venture.model';

@Pipe({
  name: 'filterType'
  // ,
  // pure: false
})
export class FilterTypePipe implements PipeTransform {

  transform(input, desiredFilter) {
    let output:any[] = [];
    if (input !== null){
      if (desiredFilter === 'all'){
        return input;
      } else {
        for (let i = 0; i < input.length; i++){
          console.log(input[i].ventureType);
          if (input[i].ventureType === desiredFilter){
            output.push(input[i]);
          }
        }
        // console.log("this returns " + output);
        return output;
      }
    }
  }
}
