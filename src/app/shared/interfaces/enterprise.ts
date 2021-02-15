export interface Enterprise {
  //MAPEADOR DE DATOS
  codigo_empresa: string;
  nombre_empresa: string;
  empresa_rut: string;
  empresa_direccion: string;
  empresa_comuna: number;
  empresa_ciudad: number;
  empresa_region: number;
  estado: boolean;
}

export interface Departament {
  //MAPEADOR DE DATOS
  codigo_depto: string;
  nombre_depto: string;
  estado: boolean;
}

export interface Employee {
  //MAPEADOR DE DATOS
  run_empleado: string;
  codigo_empleado: string;
  nombres: string;
  ape_pat_empleado: string;
  ape_mat_empleado: string;
  fecha_inicio_contrato: string;
  fecha_fin_contrato: string;
  email: string;
  empleado_comuna: number;
  empleado_direccion: string;
  empleado_region: number;
  empleado_ciudad: number;
  tipo_usuario: number;
  estado: boolean;
}

export interface Cenco {
  //MAPEADOR DE DATOS
  codigo_ccosto: string;
  nombre_ccosto: string;
  estado: boolean;
}

export interface Commune {
  //MAPEADOR DE DATOS
  id_comuna: string;
  nombre_comuna: string;
  estado: boolean;
}

export interface Region {
  //MAPEADOR DE DATOS
  id_region: string;
  nombre_region: string;
  estado: boolean;
}

export interface Citie {
  //MAPEADOR DE DATOS
  id_ciudad: string;
  nombre_ciudad: string;
  estado: boolean;
}

export interface Devices {
  //MAPEADOR DE DATOS
  codigo_dispositivo: string;
  nombre_dispositivo: string;
  ubicacion: string;
  estado: boolean;
}

export interface Shifts {
  //MAPEADOR DE DATOS
  codigo_turno: string;
  nombre_turno: string;
  fecha_creacion: string;
  fecha_inicio: string;
  fecha_fin: string;
  hora_inicio: string;
  hora_fin: string;
  estado: boolean;
}

export interface Cards {
  //MAPEADOR DE DATOS
  codigo_Tarjeta: string;
  numero_Tarjeta: string;
  fecha_ingreso: string;
  estado: boolean;
  id_usuario_ins: string;
  fecha_ins: string;
  id_usuario_upd: string;
  fecha_upd: string;
  run_empleado: string;
}

export interface Sectors {
  //MAPEADOR DE DATOS
  codigo_sector: string;
  nombre_sector: string;
  descripcion: string;
  estado: boolean;
}

export interface Charge {
  //MAPEADOR DE DATOS
  id_cargo: string;
  nombre_cargo: string;
  estado: boolean;
}

export interface Users {
  //MAPEADOR DE DATOS
  usr_username: string;
  usr_password: string;
  estado_id: string;
  usr_nombres: string;
  usr_ape_paterno: string;
  usr_ape_materno: string;
  usr_perfil_id: string;
  usr_email: string;
  usr_fecha_ultima_conexion: string;
  empresa_id: string;
  fecha_creacion: string;
  ultima_actualizacion: string;
}

export interface UserLogin {
  //MAPEADOR DE DATOS
  usr_username: string;
  usr_password: string;
  estado_id: string;
  usr_nombres: string;
  usr_ape_paterno: string;
  usr_ape_materno: string;
  usr_perfil_id: string;
  usr_email: string;
  usr_fecha_ultima_conexion: string;
  empresa_id: string;
  fecha_creacion: string;
  ultima_actualizacion: string;
}
