import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessDataService{

  constructor(private firestore: AngularFirestore ) { }

  getEntityById(id: string): Observable<any>{
    return this.firestore.collection('Entities').doc(id).get();
  }

  createEntity(id: string, data: any): Promise<any>{
    return this.firestore.collection('Entities').doc(id).set(data);
  }

  deleteEntity(id: string | undefined): Promise<any>{ 
    return this.firestore.collection('Entities').doc(id).delete();
  }

  updateEntity(id: string, nameUp: string, lastNameUp: string): Promise<any>{
    return  this.firestore.collection('Entities').doc(id).update({
      name: nameUp,
      lastName: lastNameUp
    })
  }
}
