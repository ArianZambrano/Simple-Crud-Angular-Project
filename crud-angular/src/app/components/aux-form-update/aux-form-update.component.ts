import { Component, OnInit, Input } from '@angular/core';
import { ProcessDataService } from '../../services/process-data/process-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aux-form-update',
  templateUrl: './aux-form-update.component.html',
  styleUrls: ['./aux-form-update.component.scss']
})
export class AuxFormUpdateComponent implements OnInit {
  @Input() id: string = "";
  @Input() entity?: any; 

  constructor(private updateService: ProcessDataService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.updateService.updateEntity(this.entity.id, this.entity.name, this.entity.lastName)
    .then(() => {this.toastr.success('La entidad fue actualizada correctamente', 'Operación exitosa');})
    .catch(error => {console.log(error)}) 
  }

}
