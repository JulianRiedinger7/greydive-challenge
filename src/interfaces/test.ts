import { Task } from "./task";
export interface Test {
  timeTest: string;
  plataforma: string;
  linkVideo: string;
  transcripcion: string;
  preguntas: Task[];
  horarioEnvio: object;
  idVideo: string;
  response: object;
  id: string;
  escenario: string;
  link: string;
  cliente: string;
}