import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {
  auxUpdateForm: FormGroup;
  updateForm: FormGroup;

  constructor(private auxForm: FormBuilder,
    private form: FormBuilder) {
    this.auxUpdateForm = this.auxForm.group({
      id: ['', Validators.required]
    });
    this.updateForm = this.form.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getAuxUpdateForm(){
    return this.auxForm
  }

  getUpdateForm(){
    return this.updateForm
  }

}
