import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProcessDataService{

  constructor(private firestore: AngularFirestore ) { }

  createEntity(data: any): Promise<any>{
    return this.firestore.collection('Entities').add(data)
  }

  deleteEntity(id: string): Promise<any>{
    return this.firestore.collection('Entities').doc(id).delete()
  }
}
