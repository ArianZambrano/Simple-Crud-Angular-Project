import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-aux-form-update',
  templateUrl: './aux-form-update.component.html',
  styleUrls: ['./aux-form-update.component.scss']
})
export class AuxFormUpdateComponent implements OnInit {
  @Input() id: string = ""
  auxUpdateForm: FormGroup

  constructor(private auxForm: FormBuilder) {
    this.auxUpdateForm = this.auxForm.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
