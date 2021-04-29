import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessDataService } from '../../services//process-data//process-data.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-read',
  templateUrl: './form-read.component.html',
  styleUrls: ['./form-read.component.scss']
})
export class FormReadComponent implements OnInit {
  readForm: FormGroup;
  entity: any

  constructor(private form: FormBuilder,
              private readService: ProcessDataService,
              private toastr: ToastrService) {
    this.readForm = this.form.group({
      id: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.readService.getEntityById(this.readForm.value.id)
    .subscribe((doc)=>{
      if (doc.exists){
        this.entity = doc.data();
      }
      else{
        this.toastr.error('La entidad que busca no existe')
      }
    })
  }
}
