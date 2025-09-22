import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeccionesService } from '../../../../services/secciones.service';
@Component({
  selector: 'app-seccion',
  imports: [
    RouterLink,
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.scss'
})
export class SeccionComponent {
  listSecciones: any;
  originalData: any[] = [];
  temp: any[] = [];
  rows: any[] = [];
  page: number = 0;
  pageSize: number = 10;
  filteredCount: number = 0;
  loading: boolean = true; 
  basicModalCloseResult: string = ''; 
  nombreSeccion: string = '';

  public _secciones = inject(SeccionesService);

  id: any;
  formSecciones: any;

  constructor(
    private seccionesService: SeccionesService,
    private router: Router, 
    private modelService: NgbModal,
    private fb: FormBuilder,
    private  aRouter: ActivatedRoute
  ){
    this.formSecciones = this.fb.group({
      seccion: [''],

    });

    this.id = aRouter.snapshot.paramMap.get('id');
  }
    ngOnInit(): void {
      this.getSecciones();
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

  getSecciones(){
    this._secciones.getSecciones().subscribe({
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

  actDesactiva(id: number){
    this._secciones.actDescSeccion(id).subscribe(data => {
        if(data == 1){
          Swal.fire({
            title: '',
            text: 'Sección dada de baja correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then((result) => {
            this.router.navigateByUrl('/secciones') 
          })
        }else{
          Swal.fire({
            title: '',
            text: 'Sección dada de alta correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then((result) => {
            this.router.navigateByUrl('/secciones') 
          })
        }
  });
}

}
