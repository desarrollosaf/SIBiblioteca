import { Component, inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, NgControl, ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { id } from '@siemens/ngx-datatable';
import { SeriesService } from '../../../../../services/series.service';
import { Series } from '../../../../../interfases/series';


@Component({
  selector: 'app-form-seccion',
  imports: [
    FormsModule, 
    NgSelectModule, 
    ReactiveFormsModule, 
    CommonModule,
    RouterModule
  ],
  templateUrl: './form-seccion.component.html',
  styleUrl: './form-seccion.component.scss'
})
export class FormSeccionComponent {
  seccion: string;
  public _series = inject(SeriesService);
  id:any;
  formSerie: FormGroup;
  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
  ){
    this.formSerie = this.fb.group({
      idSeccion:['', Validators.required],
      serie:['', Validators.required],
      id: ['']
    })
      this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if(this.id != null){
        this.editSerie();
    }
  }


addSerie(){
  const serie: Series = {
    serie: this.formSerie.value.serie,
    idSeccion: this.formSerie.value.idseccion,
    id: this.formSerie.value.id
  };

  if(this.formSerie.value.id != 0 && this.formSerie.value.id != null){
      this._series.updateSerie(serie).subscribe(data => {
        Swal.fire({
          title: '',
          text: 'Serie modificada correctamente',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then((result) => {
          this.router.navigateByUrl('/series') 
        })
      })
    }else{
      this._series.addSerie(serie).subscribe(data =>{
        Swal.fire({
              title: '',
              text: 'Serie registrada correctamente',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            }).then((result) => {
              this.router.navigateByUrl('/series') 
            })
      })
    }
}

editSerie(){
  this._series.editSerie(this.id).subscribe({
    next: (response: any) => {
      this.formSerie.setValue({
        idSeccion: response.idSeccion,
        serie: response.serie,
        id: response.id
      })
    },
    error: (e: HttpErrorResponse) => {
    console.error('Error:', e.error?.msg || e);
    }
  })
}


}
