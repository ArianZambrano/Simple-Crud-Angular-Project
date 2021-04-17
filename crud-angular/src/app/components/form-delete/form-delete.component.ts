import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.scss']
})
export class FormDeleteComponent implements OnInit {
  deleteForm: FormGroup
  id?: string

  constructor(private form: FormBuilder,
              private createService: ProcessDataService,
              private toastr: ToastrService) {
    this.deleteForm = this.form.group({
      id: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  } 

  onSubmit(){
    this.id = this.deleteForm.value.id;
    this.createService.deleteEntity(this.id)
    .then(() => {this.toastr.success('La entidad fue eliminada correctamente', 'Operación exitosa');})
    .catch(error => {console.log(error)})
  }
}
