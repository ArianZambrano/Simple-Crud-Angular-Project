import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-angular';
  showTable: boolean = false;
  typeButton: string = '';

  constructor(){
    this.viewOrHideButton()
  }

  viewOrHideButton(){
    this.showTable ? this.typeButton = 'Hide' : this.typeButton = 'View';
  }

}
