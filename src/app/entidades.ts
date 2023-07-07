// export class Cliente {
//   cedula: string = "";
//   nombres: string = "";
//   email: string = "";
// }

export class Cliente {
  identificador: string = "";
  nombre: string = "";
  apellido: string = "";
}

export class Curso {
  codigoCurso: string="";
  nombreCurso: string = "";
  descripcionCurso: string = "";
}

export class Inscripcion {
  codigo!: number;
  cedula: string = "";
  codigoCurso: string = "";
  nombreCurso: string = "";
}
