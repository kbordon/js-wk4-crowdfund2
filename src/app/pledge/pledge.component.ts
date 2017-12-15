import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Venture } from '../venture.model';
import { VentureService } from '../venture.service';


@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.css'],
  providers: [VentureService]
})
export class PledgeComponent implements OnInit {
  @Input() selectedVenture;
  @Output() pledgeSender = new EventEmitter;

  constructor(private ventureService: VentureService) { }

  ngOnInit() {
  }

  beginPledge(pledgeAmount){
    this.selectedVenture.supportersCurrent = parseInt(this.selectedVenture.supportersCurrent) + parseInt(pledgeAmount);
    console.log(this.selectedVenture.supportersCurrent);
    this.ventureService.updateVenture(this.selectedVenture);
  }
}
