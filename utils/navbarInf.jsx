import {
  UserGroupIcon,
  CurrencyDollarIcon,
  UsersIcon,
  QueueListIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export const CARD = [
  {
    title: "Nuestra Instutución",
    icon: BeakerIcon,
    urlPath: "/nuestra-institucion",
    submenu: [
      {
        title: "Nuestra misión y vision",
        urlPath: "/nuestra-institucion#mision-y-vision",
      },
      {
        title: "Principios institucionales",
        urlPath: "/nuestra-institucion#principios-institucionales",
      },
      {
        title: "Objetivos institucionales",
        urlPath: "/nuestra-institucion#objetivos-institucionales",
      },
    ],
  },
  {
    title: "Bienestar",
    icon: BuildingLibraryIcon,
    urlPath: "/bienestar",
    submenu: [
      {
        title: "Prácticas formativas",
        urlPath: "/bienestar#practicas-formativas",
      },
      {
        title: "Salidas pedagógicas",
        urlPath: "/bienestar#salidas-pedagogicas",
      },
      {
        title: "Egresados",
        urlPath: "/bienestar#egresados",
      },
      {
        title: "Solidaridad",
        urlPath: "/bienestar#solidaridad",
      },
    ],
  },
  {
    title: "Admisiones y Financiación",
    icon: UsersIcon,
    urlPath: "/admisiones-y-financiacion",
    submenu: [
      {
        title: "Inscripción",
        urlPath: "/admisiones-y-financiacion#inscripcion",
      },
      {
        title: "Financiación",
        urlPath: "/admisiones-y-financiacion#financiacion",
      },
      {
        title: "Subsidios educativos",
        urlPath: "/admisiones-y-financiacion#subsidios-educativos",
      },
      {
        title: "Registro académico",
        urlPath: "/admisiones-y-financiacion#registro-academico",
      },
    ],
  },
  {
    title: "Programas Técnicos Laborales",
    icon: BookOpenIcon,
    urlPath: "/programas-tecnicos-laborales",
    submenu: [
      {
        title: "Sede Villavicencio",
        urlPath: "/programas-tecnicos-laborales#sede-villavicencio",
      },
      {
        title: "Sede Acacias",
        urlPath: "/programas-tecnicos-laborales#sede-acacias",
      },
      {
        title: "Sede Granada",
        urlPath: "/programas-tecnicos-laborales#sede-granada",
      },
    ],
  },
  { title: "Colegio CENTEC", urlPath: "/colegio-centec", submenu: [
    { 
      title: "Prospectiva institucional",
      urlPath: "/colegio-centec#prospectiva-institucional"
    },
    {
      title: "Horizonte institucional",
      urlPath: "/colegio-centec#horizonte-institucional",
    },
    {
      title: "Principios institucionales",
      urlPath: "/colegio-centec#principios-institucionales",
    },
    {
      title: "Valores instittucionales",
      urlPath: "/colegio-centec#valores-institucionales",
    },
    {
      title: "Admisiones y financiación",
      urlPath: "/colegio-centec#adminsiones-y-financiacion",
    },
    {
      title: "Subsidios educativos",
      urlPath: "colegio-centec#subsidios-educativos",
    },
    {
      title: "Requisitos de matrícula",
      urlPath: "colegio-centec#requisitos-de-matricula",
    },
    {
      title: "Gestión académica",
      urlPath: "colegio-centec#gestion-academica",
    }
  ] },

  {
    title: "Educación Continua",
    icon: BeakerIcon,
    urlPath: "/educacion-continua",
    submenu: [
      {
        title: "Diplomados",
        urlPath: "/educacion-continua#diplomados",
      },
      {
        title: "Seminarios",
        urlPath: "/educacion-continua#seminarios",
      },
      {
        title: "Cursos",
        urlPath: "/educacion-continua#cursos",
      },
    ],
  },
  {
    title: "Innovación y Emprendimiento",
    urlPath: "/innovacion-y-emprendimiento",
  },
];

export const NavigationMobil = [
  { title: "Nuestra Institución", urlPath: "/nuestra-institucion", icon: UserGroupIcon },
  { title: "Bienestar", urlPath: "/bienestar", icon: UsersIcon },
  {
    title: "Adminisiones y Financiación",
    urlPath: "/admisiones-y-financiacion",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Programas Técnicos Laborales",
    urlPath: "/programas-tecnicos-laborales",
    icon: QueueListIcon,
  },
  { title: "Colegio CENTEC", urlPath: "/colegio-centec", icon: BuildingLibraryIcon },
  { title: "Educación Continua", urlPath: "/educacion-continua", icon: BookOpenIcon },
  { title: "Innovación y Emprendimiento", urlPath: "/innovacion-y-emprendimiento", icon: BeakerIcon },
];
