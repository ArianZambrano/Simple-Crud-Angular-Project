import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {
  updateForm: FormGroup;
  id: string = ''

  constructor(private form: FormBuilder) {
    this.updateForm = this.form.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.id = this.updateForm.value.id
  }
}
