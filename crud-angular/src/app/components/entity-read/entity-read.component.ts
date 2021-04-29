import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-read',
  templateUrl: './entity-read.component.html',
  styleUrls: ['./entity-read.component.scss']
})
export class EntityReadComponent implements OnInit {
  @Input() entity: any

  constructor() { }

  ngOnInit(): void {
  }

}
