import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./serie.component').then(c => c.SerieComponent)
    },
    {
        path: 'createSerie',
        loadComponent: () => import('./form-seccion/form-seccion.component').then(c => c.FormSeccionComponent)
    },
    {
        path: 'editSerie/:id',
        loadComponent: () => import('./form-seccion/form-seccion.component').then(c => c.FormSeccionComponent)
    }
] as Routes;