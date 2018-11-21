export const navItems = [
  {
    name: 'Acceso',
    url: '/',
    icon: 'icon-login'
  },
  {
    name: 'Hoja de vida',
    url: '/hoja_de_vida',
    icon: 'icon-notebook',
    children: [
      {
        name: 'Datos personales',
        url: '/hoja_de_vida/persona',
        icon: 'icon-user-follow'
      }, {
        name: 'Nucleo familiar',
        url: '/hoja_de_vida/nucleo_familiar',
        icon: 'icon-people'
      },
      {
        name: 'Formación académica',
        url: '/hoja_de_vida/formacion_academica',
        icon: 'icon-graduation'
      },
      {
        name: 'Idioma extranjero',
        url: '/hoja_de_vida/persona',
        icon: 'icon-user-follow'
      },
      {
        name: 'Experiencia laboral',
        url: '/hoja_de_vida/experiencia_laboral',
        icon: 'icon-briefcase'
      },
    ]
  },

  {
    name: 'Gestión Ceremonias',
    url: '/ceremonia',
    icon: 'fa fa-graduation-cap',
    children: [
      {
        name: 'Ceremonia',
        url: '/ceremonia/gestionar_ceremonia',
        icon: 'fa fa-institution'
      }, {
        name: 'Mesa de honor',
        url: '/ceremonia/mesa_honor',
        icon: 'icon-people'
      },
      {
        name: 'Resolución de grado',
        url: '/ceremonia/formacion_academica',
        icon: 'fa fa-file-text'
      },

    ]
  }
];
