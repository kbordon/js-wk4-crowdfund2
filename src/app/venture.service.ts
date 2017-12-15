import { Injectable } from '@angular/core';
import { Idea } from './idea.model';
import { Venture } from './venture.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VentureService {
  ventures: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.ventures = database.list('ventures');
  }

  getVentures(){
    return this.ventures;
  }

  getVentureById(ventureId){
    return this.database.object('ventures/' + ventureId);
  }

  pledgeVenture(localUpdatedVenture){
    var ventureEntryInFirebase = this.getVentureById(localUpdatedVenture.$key);
    ventureEntryInFirebase.update({supportersCurrent: localUpdatedVenture.supportersCurrent});
  }

  addVenture(newVenture: Venture){
    this.ventures.push(newVenture);
  }

  updateVenture(localUpdatedVenture){
    var ventureEntryInFirebase = this.getVentureById(localUpdatedVenture.$key);
    ventureEntryInFirebase.update({title: localUpdatedVenture.title,
                                  artist: localUpdatedVenture.creator,
                                  description: localUpdatedVenture.description});
  }

}
