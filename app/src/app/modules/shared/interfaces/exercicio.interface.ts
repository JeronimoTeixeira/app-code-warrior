import { IExemplo } from "./exemplo.interface"

export interface IExercicio {
    id: number
    enunciado: string
    nomeFuncao: string
    exemplos: IExemplo[]
    notas: string
}