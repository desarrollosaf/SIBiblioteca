import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  // {
  //   label: 'Cuestionario',
  //   icon: 'home',
  //   link: '/cuestionario',
  //   roles: ['usuario'],
  // },
  {
    label: 'Administrados',
    icon: 'user',
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Catálogos',
            isTitle: true,
          },
          {
            label: 'Secciones',
            link: '/secciones'
          },
          {
            label: 'Series',
            link: '/series'
          },
          {
            label: 'Subseries',
            link: '/subseries'
          }, 
          {
            label: 'Registros',
            isTitle: true,
          },
          {
            label: 'Registro',
            link: '/registros'
          },
          {
            label: 'Solicitudes',
            isTitle: true,
          },
          {
            label: 'Pendientes',
            link: '/solPendiente'
          },
          {
            label: 'Aprobadas',
            link: '/registros'
          },
          {
            label: 'Rechazadas',
            link: '/registros'
          },
        ],
        
      },
    ]
  },
  
  
];
