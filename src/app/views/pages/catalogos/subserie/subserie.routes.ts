import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./subserie.component').then(c => c.SubserieComponent)
    },
    // {
    //     path: 'registroPersonal',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // },
    // {
    //     path: 'editPersonal/:id',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // },
    // {
    //     path: 'bajaPersonal/:id',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // }
] as Routes;