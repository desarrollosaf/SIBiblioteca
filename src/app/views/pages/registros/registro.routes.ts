import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./registros.component').then(c => c.RegistrosComponent)
    },
    {
        path: 'createRegistro',
        loadComponent: () => import('./registro/registro.component').then(c => c.RegistroComponent)
    },
    {
        path: 'editRegistro/:id',
        loadComponent: () => import('./registro/registro.component').then(c => c.RegistroComponent)
    },

    // {
    //     path: 'bajaPersonal/:id',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // }
] as Routes;