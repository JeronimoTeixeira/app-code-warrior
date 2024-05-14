import { Injectable } from '@angular/core';
import { IExercicio } from '../../shared/interfaces/exercicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  private exercicios: IExercicio[]  = [
    {
      "id": 1,
      "enunciado": "Crie uma função chamada calculadora que recebe dois números e uma operação aritmética (como +, -, *, /) e retorna o resultado dessa operação.",
      "nomeFuncao": "calculadora",
      "exemplos": [
        {"entrada": "(5, 3, '+')", "saida": "8"},
        {"entrada": "(5, 3, '-')", "saida": "2"},
        {"entrada": "(5, 3, '*')", "saida": "15"},
        {"entrada": "(5, 3, '/')", "saida": "1.6666666666666667"}
      ],
      "notas": "Lembre-se de tratar a divisão por zero retornando alguma mensagem apropriada."
    },
    {
      "id": 2,
      "enunciado": "Desenvolva uma função chamada ehPalindromo que verifica se uma palavra ou frase é um palíndromo (ou seja, pode ser lida da mesma forma de trás para frente, desconsiderando espaços, pontuações e maiúsculas).",
      "nomeFuncao": "ehPalindromo",
      "exemplos": [
        {"entrada": "('arara')", "saida": "true"},
        {"entrada": "('A base do teto desaba')", "saida": "true"},
        {"entrada": "('OpenAI')", "saida": "false"}
      ],
      "notas": "Considere remover espaços e converter para minúsculas antes de fazer a verificação."
    },
    {
      "id": 3,
      "enunciado": "Escreva uma função chamada contaVogais que recebe uma string e retorna o número de vogais presentes nela.",
      "nomeFuncao": "contaVogais",
      "exemplos": [
        {"entrada": "('hello')", "saida": "2"},
        {"entrada": "('why')", "saida": "0"}
      ],
      "notas": "Considere as vogais 'a', 'e', 'i', 'o', 'u' tanto em minúsculas quanto em maiúsculas."
    },
    {
      "id": 4,
      "enunciado": "Crie uma função chamada celsiusParaFahrenheit que converte uma temperatura em Celsius para Fahrenheit utilizando a fórmula F = C * 9/5 + 32.",
      "nomeFuncao": "celsiusParaFahrenheit",
      "exemplos": [
        {"entrada": "(0)", "saida": "32"},
        {"entrada": "(-30)", "saida": "-22"},
        {"entrada": "(100)", "saida": "212"}
      ],
      "notas": "Use operações aritméticas básicas para realizar a conversão."
    },
    {
      "id": 5,
      "enunciado": "Implemente uma função chamada maximo que recebe três números e retorna o maior deles.",
      "nomeFuncao": "maximo",
      "exemplos": [
        {"entrada": "(1, 2, 3)", "saida": "3"},
        {"entrada": "(10, 20, 5)", "saida": "20"}
      ],
      "notas": "Considere usar a função Math.max() ou uma série de instruções if para comparar os valores."
    }
  ]

  obterExemploPorId(id: number){
    return this.exercicios.find( exercicio => exercicio.id == id);
  }

  constructor() { }
}
