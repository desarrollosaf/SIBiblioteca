import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./buscador.component').then(c => c.BuscadorComponent)
    },

] as Routes;