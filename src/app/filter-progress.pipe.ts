import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProgress'
})
export class FilterProgressPipe implements PipeTransform {

  transform(input, desiredFilter) {
    let output:any[] = [];
    if (input !== null){
      if (desiredFilter === 'all'){
        return input;
      } else if (desiredFilter === 'ongoing'){
        for (let i = 0; i < input.length; i++){
          console.log(input[i].supportersGoal);
          if (input[i].supportersCurrent/input[i].supportersGoal < 1 || input[i].fundsCurrent/input[i].fundsGoal < 1){
            output.push(input[i]);
            console.log(input[i].title + " is ongoing");
          }
        }
        return output;
      } else {
        for (let i = 0; i < input.length; i++){
          for (let i = 0; i < input.length; i++){
            if (input[i].supportersCurrent/input[i].supporters || input[i].fundsCurrent/input[i].fundsGoal){
              output.push(input[i]);
              console.log(input[i].title + " is complete");
            }
          }
          return output;
        }
      }
    }
  }

}
