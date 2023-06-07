export class Cliente {
  cedula: string = "";
  nombres: string = "";
  email: string = "";
}


export class Curso {
  codigoCurso: string="";
  nombreCurso: string = "";
  descripcionCurso: string = "";
}

export class Inscripcion {
  id!: number;
  cedula: string = "";
  codigo: string = "";
  codigo_curso: string = "";
  nombre_curso: string = "";
}
