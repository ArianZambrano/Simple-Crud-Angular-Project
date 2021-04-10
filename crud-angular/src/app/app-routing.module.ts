import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';
import { FormReadComponent } from './components/form-read/form-read.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';

const routes: Routes = [
  {path: 'create', component: FormCreateComponent},
  {path: 'delete', component: FormDeleteComponent},
  {path: 'read', component: FormReadComponent},
  {path: 'update', component: FormUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
