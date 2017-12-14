import { Component, OnInit } from '@angular/core';
import { Venture } from '../venture.model';
import { VentureService } from '../venture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-venture',
  templateUrl: './add-venture.component.html',
  styleUrls: ['./add-venture.component.css'],
  providers: [VentureService]
})
export class AddVentureComponent implements OnInit {

  hasFormError:boolean = false;

  constructor(private router: Router, private ventureService:VentureService) { }

  ngOnInit() {
  }

  submitForm(title, creator, description, supporters, funds, plans, type){
      if (supporters === ''){
        supporters = 0;
      } else {
        supporters = parseInt(supporters);
      }
      if (funds === ''){
        funds = 0;
      } else {
        funds = parseInt(funds);
      }
      if (title === '' || creator === '' || description === '' || type === ''){
        this.hasFormError = true;
      } else {
        var newVenture:Venture = new Venture(title, creator, description, supporters, funds, plans, type)
        this.ventureService.addVenture(newVenture);
        this.router.navigate(['ventures']);
      }

  }

}
