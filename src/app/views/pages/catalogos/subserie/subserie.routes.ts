import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./subserie.component').then(c => c.SubserieComponent)
    },
    {
        path: 'createSubserie',
        loadComponent: () => import('./form-seccion/form-seccion.component').then(c => c.FormSeccionComponent)
    },
    {
        path: 'editSubserie/:id',
        loadComponent: () => import('./form-seccion/form-seccion.component').then(c => c.FormSeccionComponent)
    }

] as Routes;