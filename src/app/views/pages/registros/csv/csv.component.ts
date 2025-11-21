import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CsvService } from '../../../../services/csv.service';

@Component({
  selector: 'app-csv',
  imports: [
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    NgSelectModule
  ],
  templateUrl: './csv.component.html',
  styleUrl: './csv.component.scss'
})
export class CsvComponent {
  public _csv = inject(CsvService);
  formCsv : any;
constructor(
    private router: Router, 
    private modelService: NgbModal,
    private fb: FormBuilder,
    private  aRouter: ActivatedRoute
  ){
    this.formCsv = this.fb.group({
          csv: [''],
    });
  };

  addCsv(){
  const file = this.formCsv.get('csv')?.value;

  if (!file) {
    console.error("No hay archivo seleccionado");
    return;
  }

  const formData = new FormData();
  formData.append('csv', file); // ← aquí va el FILE, no un string

  this._csv.addCsv(formData).subscribe(data => {
    Swal.fire({
      text: 'CSV cargado correctamente',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    }).then(() => this.router.navigateByUrl('/registros'));
  });
}

  onFileSelected(event: any) {
  const file = event.target.files[0];
  this.formCsv.get('csv')?.setValue(file); 
}



}
