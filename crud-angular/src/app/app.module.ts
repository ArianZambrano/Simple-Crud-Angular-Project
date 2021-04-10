import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ProcessDataService } from './services/process-data/process-data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent} from './components/data-table/data-table.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormReadComponent } from './components/form-read/form-read.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    FormCreateComponent,
    FormReadComponent,
    FormUpdateComponent,
    FormDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [ProcessDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
