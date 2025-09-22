import { Component, inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, NgControl, ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { SeccionesService } from '../../../../../services/secciones.service';
import { Secciones } from '../../../../../interfases/secciones';
import { id } from '@siemens/ngx-datatable';


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
  public _secciones = inject(SeccionesService);
  id:any;
  formSeccion: FormGroup;
  constructor(
    private seccionesService: SeccionesService,
    private router: Router,
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
  ){
    this.formSeccion = this.fb.group({
      seccion:['', Validators.required],
      id: ['']
    })
      this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if(this.id != null){
        this.editSeccion();
    }
  }


addSeccion(){
  const seciones: Secciones = {
    seccion: this.formSeccion.value.seccion,
    id: this.formSeccion.value.id
  };

  if(this.formSeccion.value.id != 0 && this.formSeccion.value.id != null){
      this._secciones.updateSeccion(seciones).subscribe(data => {
        Swal.fire({
          title: '',
          text: 'Sección modificada correctamente',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then((result) => {
          this.router.navigateByUrl('/secciones') 
        })
      })
    }else{
      this._secciones.addSeccion(seciones).subscribe(data =>{
        Swal.fire({
              title: '',
              text: 'Sección registrada correctamente',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            }).then((result) => {
              this.router.navigateByUrl('/secciones') 
            })
      })
    }
}

editSeccion(){
  this._secciones.editSeccion(this.id).subscribe({
     next: (response: any) => {
      this.formSeccion.setValue({
        seccion: response.seccion,
        id: response.id
      })
    },
    error: (e: HttpErrorResponse) => {
    console.error('Error:', e.error?.msg || e);
    }
  })
}


}
