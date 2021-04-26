import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {
  updateForm: FormGroup;
  id: string = '';
  entity: any;
  validated?: boolean

  constructor(private form: FormBuilder,
              private updateService: ProcessDataService,
              private toastr: ToastrService) {
    this.updateForm = this.form.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.id = this.updateForm.value.id;
    this.getEntity();
  }

  getEntity(){
    this.updateService.getEntityById(this.id)
    .subscribe((doc)=>{
      if (doc.exists){
        this.entity = doc.data();
        this.validated = true
      }
      else{
        this.toastr.error('La entidad que busca no existe')
      }
    })
  }
}
