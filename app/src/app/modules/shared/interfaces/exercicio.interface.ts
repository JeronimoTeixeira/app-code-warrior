import { IExemplo } from "./exemplo.interface"

export interface IExercicio {
    id: number
    categoria: string
    dificuldade: string
    enunciado: string
    nomeFuncao: string
    exemplos: IExemplo[]
    notas: string
}