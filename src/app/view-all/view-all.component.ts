import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { Venture } from '../venture.model';
import { Router } from '@angular/router';
import { VentureService } from '../venture.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
  providers: [VentureService]
})
export class ViewAllComponent implements OnInit {
  ventures: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  filterByType: string = "all";
  filterByProgress: string = "all";

  constructor(private router: Router, private ventureService: VentureService) { }

  ngOnInit() {
    this.ventures = this.ventureService.getVentures();
    console.log(this.ventures);
  }

  goToDetailPage(clickedVenture){
    this.router.navigate(['ventures', clickedVenture.$key]);
  }

  changeType(selectedOption){
    this.filterByType = selectedOption;
    console.log(this.filterByType);
  }

  changeProgress(selectedOption){
    this.filterByProgress = selectedOption;
    console.log(this.filterByProgress);
  }

}
