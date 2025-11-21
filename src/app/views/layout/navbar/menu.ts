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
<<<<<<< HEAD
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
=======
>>>>>>> 91e906b93cf90e60d617afcd19f441323b467a47
        ],
        
      },
    ]
  },
  
  
];
