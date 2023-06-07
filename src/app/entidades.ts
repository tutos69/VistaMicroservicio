export class Cliente {
  cedula: string = "";
  nombre: string = "";
  correoElectronico: string = "";
}


export class Curso {
  codigo: string = "";
  nombre_curso: string = "";
  descripción: string = "";
}

export class Inscripcion {
  id!: number;
  cedula: string = "";
  codigo: string = "";
  codigo_curso: string = "";
  nombre_curso: string = "";
}
