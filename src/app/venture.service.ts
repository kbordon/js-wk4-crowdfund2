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

}
