import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-read',
  templateUrl: './form-read.component.html',
  styleUrls: ['./form-read.component.scss']
})
export class FormReadComponent implements OnInit {
  readForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.readForm = this.form.group({
      id: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getReadForm(){
    return this.readForm
  }

}
