import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Idea } from '../idea.model';
import { Venture } from '../venture.model';
import { VentureService } from '../venture.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-venture-detail',
  templateUrl: './venture-detail.component.html',
  styleUrls: ['./venture-detail.component.css'],
  providers: [VentureService]
})
export class VentureDetailComponent implements OnInit {
  ventureId: string;
  ventureToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ventureService: VentureService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.ventureId = urlParameters['id'];
    });
    this.ventureToDisplay = this.ventureService.getVentureById(this.ventureId);
  }

}
