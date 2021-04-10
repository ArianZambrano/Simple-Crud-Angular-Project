import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() shown: boolean = false
  entities: Observable<any[]>

  constructor(firestore: AngularFirestore) { 
    this.entities = firestore.collection('Entities').valueChanges()
  }

  ngOnInit(): void {

  }

}
