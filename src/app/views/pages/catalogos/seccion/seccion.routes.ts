import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./seccion.component').then(c => c.SeccionComponent)
    },
    {
        path: 'createSeccion',
        loadComponent: () => import('./form-seccion/form-seccion.component').then(c => c.FormSeccionComponent)
    },
    {
        path: 'editSeccion/:id',
        loadComponent: () => import('./form-seccion/form-seccion.component').then(c => c.FormSeccionComponent)
    },
    // {
    //     path: 'bajaPersonal/:id',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // }
] as Routes;