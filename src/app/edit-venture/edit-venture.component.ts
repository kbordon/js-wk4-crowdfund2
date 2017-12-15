import { Component, Input, OnInit } from '@angular/core';
import { VentureService } from '../venture.service';

@Component({
  selector: 'app-edit-venture',
  templateUrl: './edit-venture.component.html',
  styleUrls: ['./edit-venture.component.css'],
  providers: [VentureService]
})
export class EditVentureComponent implements OnInit {
  @Input() selectedVenture;

  constructor(private ventureService: VentureService) { }

  ngOnInit() {
  }

  beginUpdatingVenture(ventureToUpdate){
    this.ventureService.updateVenture(ventureToUpdate);
  }
}
