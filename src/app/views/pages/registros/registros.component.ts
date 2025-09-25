import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrosService } from '../../../services/registros.service';

@Component({
  selector: 'app-registros',
  imports: [
    RouterLink,
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.scss'
})
export class RegistrosComponent {
  listRegistros: any;
  originalData: any[] = [];
  temp: any[] = [];
  rows: any[] = [];
  page: number = 0;
  pageSize: number = 10;
  filteredCount: number = 0;
  loading: boolean = true; 
  basicModalCloseResult: string = ''; 

  public _registros = inject(RegistrosService);

  id: any;
  formRegistros: any;

  constructor(
      private registrosServive: RegistrosService,
      private router: Router, 
      private modelService: NgbModal,
      private fb: FormBuilder,
      private  aRouter: ActivatedRoute
    ){
      this.formRegistros = this.fb.group({
        seccion: [''],
  
      });
  
      this.id = aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
      this.getRegistros();
    }

    setPage(pageInfo: any) {
    this.page = pageInfo.offset;
    const start = this.page * this.pageSize;
    const end = start + this.pageSize;
    this.rows = this.temp.slice(start, end);
  }

  updateFilter(event: any) {
    const val = (event.target?.value || '').toLowerCase();
    this.temp = this.originalData.filter((row: any) => {
      return Object.values(row).some((field) => {
        return field && field.toString().toLowerCase().includes(val);
      });
    });

    this.filteredCount = this.temp.length;
    this.setPage({ offset: 0 });
  }

  getRegistros(){
    this._registros.getRegistros().subscribe({
      next: (response: any) => {
        this.originalData = [...response.data];
        this.temp = [...this.originalData];
        this.filteredCount = this.temp.length;
        this.setPage({ offset: 0 });
        this.loading = false;
      },
      error: (e: HttpErrorResponse) => {
        const msg = e.error?.msg || 'Error desconocido';
        console.error('Error del servidor:', msg);
      }
    })
  }

  actDesactivaReg(id: any){

  }


}
