import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {
  createForm: FormGroup;
  entity: any;

  constructor(private form: FormBuilder,
              private createService: ProcessDataService,
              private toastr: ToastrService) {
    this.createForm = this.form.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.entity = this.createForm.value
    this.createService.createEntity(this.entity.id, this.entity)
    .then(() => {this.toastr.success('La entidad fue registrada correctamente', 'Operación exitosa');})
    .catch(error => {console.log(error)}) 
  }
}
