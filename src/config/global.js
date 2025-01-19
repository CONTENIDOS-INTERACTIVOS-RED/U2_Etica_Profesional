export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Valores y compromisos éticos en el contexto profesional',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Principios básicos de la ética profesional aplicados a la seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Perfil del profesional con compromiso ético',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desarrollo de valores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'República de Colombia. (Mayo 26 de 2015) Decreto 1072 de 2015. Ministerio de Trabajo. Colombia. ',
      link:
        'https://www.mintrabajo.gov.co/normatividad/decreto-unico-reglamentario-trabajo.html ',
    },
    {
      referencia:
        'Cortés, J. M. (2018). Sistemas de gestión de la seguridad y salud en el trabajo (ISO 45001:2018): (1 ed.). Málaga, España, Editorial ICB. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/225263?page=25',
    },
    {
      referencia:
        'Gea-Izquierdo, E. (2017). Seguridad y salud en el trabajo: ( ed.). Quito, Editorial de la Pontificia Universidad Católica del Ecuador. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/125562?page=495 ',
    },
    {
      referencia:
        'Fresno Chávez, C. (2018). La formación de valores: características: ( ed.). Córdoba, Argentina: Ciudad Educativa.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/36729?page=13 ',
    },
    {
      referencia:
        'O’Donnell, K. (2007). Valores humanos en la empresa: (1 ed.). LID Editorial España. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/270633?page=39 ',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía',
      significado:
        'derecho de los trabajadores a tomar decisiones informadas sobre su propia salud y seguridad.',
    },
    {
      termino: 'Beneficencia',
      significado:
        'obligación de actuar en beneficio de los demás, especialmente en la prevención de riesgos laborales.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'protección de la información sensible relacionada con la salud y el bienestar de los trabajadores.',
    },
    {
      termino: 'Equidad',
      significado:
        'principio que busca igualdad de condiciones para todos los trabajadores, sin importar su posición o características personales.',
    },
    {
      termino: 'Flexibilidad',
      significado:
        'capacidad de una organización para adaptarse a cambios y nuevas circunstancias de manera efectiva.',
    },
    {
      termino: 'Honestidad',
      significado:
        'sinceridad y transparencia en las comunicaciones y acciones dentro de la organización.',
    },
    {
      termino: 'Justicia',
      significado:
        'principio que garantiza un tratamiento justo y equitativo para todos los trabajadores en el entorno laboral.',
    },
    {
      termino: 'Participación',
      significado:
        'implicación activa de los empleados en la toma de decisiones y en la gestión de riesgos laborales.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'compromiso de los empleados y empleadores de asumir las consecuencias de sus decisiones y acciones.',
    },
    {
      termino: 'Valores',
      significado:
        'principios y creencias que guían el comportamiento y las decisiones de las personas y sociedades.',
    },
  ],
}
