import { Component, inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, NgControl, ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { id } from '@siemens/ngx-datatable';
import { SubseriesService } from '../../../../../services/subseries.service';
import { Subseries } from '../../../../../interfases/subseries';


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
  public _subserie = inject(SubseriesService);
  id:any;
  formSubserie: FormGroup;
  seriesArray: { id: number | string; name: string}[] = [];

  constructor(
    private subseriesService: SubseriesService,
    private router: Router,
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
  ){
    this.formSubserie = this.fb.group({
      idSerie:['', Validators.required],
      subserie:['', Validators.required],
      id: ['']
    })
      this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getSeries();
    if(this.id != null){
        this.editSubserie();
    }
  }

addSubserie(){
  const subserie: Subseries = {
    subserie: this.formSubserie.value.subserie,
    idSerie: this.formSubserie.value.idSerie,
    id: this.formSubserie.value.id
  };

  if(this.formSubserie.value.id != 0 && this.formSubserie.value.id != null){
      this._subserie.updateSubserie(subserie).subscribe(data => {
        Swal.fire({
          title: '',
          text: 'Subserie modificada correctamente',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then((result) => {
          this.router.navigateByUrl('/subseries') 
        })
      })
    }else{
      this._subserie.addSubserie(subserie).subscribe(data =>{
        Swal.fire({
              title: '',
              text: 'Subserie registrada correctamente',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            }).then((result) => {
              this.router.navigateByUrl('/subseries') 
            })
      })
    }
}

editSubserie(){
  this._subserie.editSubserie(this.id).subscribe({
    next: (response: any) => {
      this.formSubserie.setValue({
        idSerie: response.idSerie,
        subserie: response.subserie,
        id: response.id
      })
    },
    error: (e: HttpErrorResponse) => {
    console.error('Error:', e.error?.msg || e);
    }
  })
}


getSeries(){
  this._subserie.getSeries().subscribe(data => {
    this.seriesArray = [
      { id: '', name: '--Seleccione una opción--' },
        ...data.map((item: { id: number; serie: string }) => ({
          id: item.id,
          name: item.serie
        }))
    ]
  })
}


}
