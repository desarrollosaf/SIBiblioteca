import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { BuscadorService } from '../../../services/buscador.service';

@Component({
  selector: 'app-buscador',
  imports: [
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  public _busqueda = inject(BuscadorService);

  formRegistros: any;
  resultados: any = {};

    constructor(
        private buscadorService: BuscadorService,
        private router: Router, 
        private modelService: NgbModal,
        private fb: FormBuilder,
        private  aRouter: ActivatedRoute
      ){
        this.formRegistros = this.fb.group({
          busqueda: [''],
        });
      }
  
      ngOnInit(): void {
        // this.getRegistros();
      }

  buscar(){
    this._busqueda.getBusqueda(this.formRegistros.value.busqueda).subscribe((resultados) => {
      this.resultados = resultados;
    });
  }

}
