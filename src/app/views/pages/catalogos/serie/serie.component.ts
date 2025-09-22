import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../../../services/series.service';


@Component({
  selector: 'app-serie',
  imports: [
    RouterLink,
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.scss'
})
export class SerieComponent {
  originalData: any[] = [];
  temp: any[] = [];
  rows: any[] = [];
  page: number = 0;
  pageSize: number = 10;
  filteredCount: number = 0;
  loading: boolean = true; 
  basicModalCloseResult: string = ''; 
  nombreSeccion: string = '';

  public _series = inject(SeriesService);

  id: any;
  formSeries: any;

constructor(
    private seriesService: SeriesService,
    private router: Router, 
    private modelService: NgbModal,
    private fb: FormBuilder,
    private  aRouter: ActivatedRoute
  ){
    this.formSeries = this.fb.group({
      idSeccion: [''],
      serie: ['']
    });

    this.id = aRouter.snapshot.paramMap.get('id');
  }
    ngOnInit(): void {
      // this.getSecciones();
      this.getSeries();
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

  getSeries(){
    this._series.getSeries().subscribe({
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

  actDesactivaSerie(id: number){
    this._series.actDescSerie(id).subscribe(data => {
        if(data == 1){
          Swal.fire({
            title: '',
            text: 'Serie dada de baja correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then((result) => {
            this.router.navigateByUrl('/series') 
          })
        }else{
          Swal.fire({
            title: '',
            text: 'Serie dada de alta correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then((result) => {
            this.router.navigateByUrl('/series') 
          })
        }
  });
}

}
