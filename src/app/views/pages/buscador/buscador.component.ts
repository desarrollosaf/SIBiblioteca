import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute, RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { BuscadorService } from '../../../services/buscador.service';
import { Solicitudes } from '../../../interfases/solicitudes';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  formSolicitud : FormGroup;
  resultados: any = {};

    constructor(
        private buscadorService: BuscadorService,
        private router: Router, 
        private modelService: NgbModal,
        private fb: FormBuilder,
        private  aRouter: ActivatedRoute,
        // public activeModal: NgbActiveModal
      ){
        this.formRegistros = this.fb.group({
          busqueda: [''],
        });

        this.formSolicitud = this.fb.group({
          nombre_completo:['', [Validators.required]],
          telefono:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
          correo:['', [Validators.required, Validators.email]],
          confirma_correo:['',[Validators.required, Validators.email]],
          idRegistro:['']
      },{
        validators:[this.emailsValidators()]
      });
    }

    get correo() {
      return this.formSolicitud.get('correo');
    }

    get nombre(){
      return this.formSolicitud.get('nombre_completo')
    }

    get telefono(){
      return this.formSolicitud.get('telefono')
    }

    emailsValidators(): ValidatorFn {
      return (group: AbstractControl): ValidationErrors | null => {
        const correo = group.get('correo')?.value;
        const confirmarCorreo = group.get('confirma_correo')?.value;

        if (correo !== confirmarCorreo) {
          return { correosNoCoinciden: true };
        }

        return null;
      };
    }
      ngOnInit(): void {
        // this.getRegistros();
      }

  buscar(){
    this._busqueda.getBusqueda(this.formRegistros.value.busqueda).subscribe((resultados) => {
      this.resultados = resultados;
    });
  }

  openSmModal(content:any, idRegistro: number){
      this.formSolicitud.patchValue({idRegistro: idRegistro})
      const modalRef = this.modelService.open(content, {size:'lg'}).result.then((result) =>{
       
      }).catch((res) => {})
    }

  addSolicitud(){
    const solicitud: Solicitudes = {
        nombre_completo: this.formSolicitud.value.nombre_completo,
        telefono: this.formSolicitud.value.telefono,
        correo: this.formSolicitud.value.correo,
        id_registro: this.formSolicitud.value.idRegistro,
      };

      this._busqueda.addSolicitud(solicitud).subscribe(data =>{
        if(data == 200){
          Swal.fire({
              title: '',
              text: 'Solicitud registrada correctamente',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            }).then((result) => {
              this.modelService.dismissAll()
            })
        }else if(data == 300){
          Swal.fire({
              title: '¡Atención!',
              text: 'Ya tienes una solicitud registrada de ese documento',
              icon: 'warning',
              timer: 2000,
              showConfirmButton: false
            }).then((result) => {
              this.modelService.dismissAll()
            })
        }  
    })

  // })
}

}
