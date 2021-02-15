import { link } from "fs";

const Home = {
  text: "Administración",
  link: "/home",
  icon: "fa fa-edit",
  submenu: [
    {
      text: "Empresas",
      link: "/dashboard/v8",
    },
    {
      text: "Cargos",
      link: "/dashboard/v9",
    },
    {
      text: "Centro de Costos",
      link: "/dashboard/v2",
    },
    {
      text: "Comunas",
      link: "/dashboard/v12",
    },
    {
      text: "Departamentos",
      link: "/dashboard/v1",
    },
    {
      text: "Dispositivos",
      link: "/dashboard/v4",
    },
    {
      text: "Empleados",
      link: "/dashboard/v3",
    },
    {
      text: "Regiones",
      link: "/dashboard/v13",
    },
    {
      text: "Ciudades",
      link: "/dashboard/ciudades",
    },
    {
      text: "Tarjetas",
      link: "/dashboard/tarjetas",
    },
    {
      text: "Sectores",
      link: "/dashboard/sectores",
    },
  ],
};

const Auditoria = {
  text: "Auditoria",
  link: "/auditoria",
  icon: "fa fa-bars",
  submenu: [
    {
      text: "Errores de Sistema",
      link: "/auditoria/erroresdesistema",
    },
    {
      text: "Eventos de Sistema",
      link: "/auditoria/eventosdesistema",
    },
  ],
};

const Cargadesdearchivo = {
  text: "Carga desde archivo",
  link: "/cargadesdearchivo",
  icon: "fa fa-upload",
  submenu: [
    {
      text: "Carga Cencos",
      link: "/cargadesdearchivo/cargacencos",
    },
    {
      text: "Carga Departamento",
      link: "/cargadesdearchivo/cargadepartamento",
    },
    {
      text: "Carga Empleados",
      link: "/cargadesdearchivo/cargaempleados",
    },
    {
      text: "Carga Usuarios",
      link: "/cargadesdearchivo/cargausuarios",
    },
    {
      text: "Carga Masiva Dispositivos",
      link: "/cargadesdearchivo/cargamasivadedispositivos",
    },
    {
      text: "Carga Masiva RFID",
      link: "/cargadesdearchivo/cargamasivaderfid",
    },
  ],
};

const Dashboard = {
  text: "Conf. del Sistema",
  link: "/dashboard",
  icon: "icon-settings",
  submenu: [
    {
      text: "Adm de parámetros",
      link: "/dashboard/v5",
    },
    {
      text: "Adm Ruta",
      link: "/dashboard/rutaacceso",
    },
  ],
};

const Reportesinformes = {
  text: "Reportes/Informes",
  link: "/reportesinformes",
  icon: "fa fa-file",
  submenu: [
    {
      text: "Reporte Usuarios",
      link: "/reportesinformes/reporteusuarios",
    },
    {
      text: "Marca Acceso",
      link: "/reportesinformes/marcaacceso",
    },
  ],
};

const Dashboard1 = {
  text: "Turnos",
  link: "/dashboard",
  icon: "icon-clock",
  submenu: [
    {
      text: "Adm de turnos",
      link: "/dashboard/v6",
    },
  ],
};

const Dashboard2 = {
  text: "Usuarios",
  link: "/dashboard",
  icon: "icon-user",
  submenu: [
    {
      text: "Adm de usuarios",
      link: "/dashboard/v7",
    },
  ],
};

const Forms = {
  text: "Sesión",
  link: "/forms",
  icon: "fa fa-key",
  submenu: [
    {
      text: "Cerrar Sesión",
      link: "/forms/standard",
    },
  ],
};

export const menu = [
  Home,
  Auditoria,
  Cargadesdearchivo,
  Dashboard,
  Reportesinformes,
  Dashboard1,
  Dashboard2,
  Forms,
];
