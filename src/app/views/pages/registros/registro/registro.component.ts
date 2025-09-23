import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrosService } from '../../../../services/registros.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Registro } from '../../../../interfases/registro';

@Component({
  selector: 'app-registro',
  imports: [
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    NgSelectModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
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
  formRegistro: any;

  subseriesArray: { id: number | string; name: string}[] = [];
  seriesArray: { id: number | string; name: string}[] = [];
  seccionesArray: { id: number | string; name: string}[] = [];
  accesosArray: { id: number | string; name: string}[] = [];


constructor(
    private registrosService: RegistrosService,
    private router: Router, 
    private modelService: NgbModal,
    private fb: FormBuilder,
    private  aRouter: ActivatedRoute
  ){
    this.formRegistro = this.fb.group({
      id_seccion: [''],
      id_serie: [''],
      id_subserie: [''],
      clave: [''],
      ubicacion: [''],
      anio: [''],
      tomo: [''],
      num_exp: [''],
      fecha_inicial: [''],
      fecha_final: [''],
      institucion: [''],
      nombre_exp: [''],
      fojas: [''],
      observaciones: [''],
      estado_doc: [''],
      caracteristicas_externas_doc: [''],
      path_portada: [''],
      path_doc: [''],
      tipo_acceso: [''],

    });

    this.id = aRouter.snapshot.paramMap.get('id');
  }
    ngOnInit(): void {
      this.getRegistros();
      this.getSecciones();
      this.getAccesos();
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

  actDesactiva(id: number){
    this._registros.actDescRegistros(id).subscribe(data => {
        if(data == 1){
          Swal.fire({
            title: '',
            text: 'Registro dada de baja correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then((result) => {
            this.router.navigateByUrl('/registros') 
          })
        }else{
          Swal.fire({
            title: '',
            text: 'Registro dada de alta correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then((result) => {
            this.router.navigateByUrl('/registros') 
          })
        }
  });
}

addRegistro(){
const registro: Registro = {
    id_seccion: this.formRegistro.value.id_seccion,
    id_serie: this.formRegistro.value.id_serie,
    id_subserie: this.formRegistro.value.id_subserie,
    clave: this.formRegistro.value.clave,
    ubicacion: this.formRegistro.value.ubicacion ,
    anio: this.formRegistro.value.anio ,
    tomo: this.formRegistro.value.tomo ,
    num_exp: this.formRegistro.value.num_exp ,
    fecha_inicial: this.formRegistro.value.fecha_inicial ,
    fecha_final: this.formRegistro.value.fecha_final ,
    institucion: this.formRegistro.value.institucion ,
    nombre_exp: this.formRegistro.value.nombre_exp ,
    fojas: this.formRegistro.value.fojas ,
    observaciones: this.formRegistro.value.observaciones ,
    estado_doc: this.formRegistro.value.estado_doc ,
    caracteristicas_doc: this.formRegistro.value.caracteristicas_doc ,
    path_portada: this.formRegistro.value.path_portada ,
    path_doc: this.formRegistro.value.path_doc ,
    tipo_acceso: this.formRegistro.value.tipo_acceso ,

  };

  // if(this.formRegistro.value.id != 0 && this.formSubserie.value.id != null){
  //     this._subserie.updateSubserie(subserie).subscribe(data => {
  //       Swal.fire({
  //         title: '',
  //         text: 'Subserie modificada correctamente',
  //         icon: 'success',
  //         timer: 2000,
  //         showConfirmButton: false
  //       }).then((result) => {
  //         this.router.navigateByUrl('/subseries') 
  //       })
  //     })
  //   }else{
  //     this._subserie.addSubserie(subserie).subscribe(data =>{
  //       Swal.fire({
  //             title: '',
  //             text: 'Subserie registrada correctamente',
  //             icon: 'success',
  //             timer: 2000,
  //             showConfirmButton: false
  //           }).then((result) => {
  //             this.router.navigateByUrl('/subseries') 
  //           })
  //     })
    // }
}

getSecciones(){
  this._registros.getComboSecciones().subscribe(data => {
    this.seccionesArray = [
      { id: '', name: '--Seleccione una opción--' },
        ...data.map((item: { id: number; seccion: string }) => ({
          id: item.id,
          name: item.seccion
        }))
    ]
  })
}

getSeries(){
  const seccion = this.formRegistro.value.id_seccion;
  this._registros.getComboSeries(seccion).subscribe(data => {
    this.seriesArray = [
      { id: '', name: '--Seleccione una opción--' },
        ...data.map((item: { id: number; serie: string }) => ({
          id: item.id,
          name: item.serie
        }))
    ]
  })
}

getSubseries(){
  const serie = this.formRegistro.value.id_serie;
  this._registros.getComboSubseries(serie).subscribe(data => {
    this.subseriesArray = [
      { id: '', name: '--Seleccione una opción--' },
        ...data.map((item: { id: number; subserie: string }) => ({
          id: item.id,
          name: item.subserie
        }))
    ]
  })
}

getAccesos(){
  this._registros.getAccesos().subscribe(data => {
    this.accesosArray = [
      { id: '', name: '--Seleccione una opción--' },
        ...data.map((item: { id: number; tipo: string }) => ({
          id: item.id,
          name: item.tipo
        }))
    ]
  })
}

}
