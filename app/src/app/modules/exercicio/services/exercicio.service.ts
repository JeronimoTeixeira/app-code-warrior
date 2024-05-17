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
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(5, 3, '+')",
          "saida": "8"
        },
        {
          "entrada": "(5, 3, '-')",
          "saida": "2"
        },
        {
          "entrada": "(5, 3, '*')",
          "saida": "15"
        },
        {
          "entrada": "(5, 3, '/')",
          "saida": "1.6666666666666667"
        }
      ],
      "notas": "Lembre-se de tratar a divisão por zero retornando alguma mensagem apropriada."
    },
    {
      "id": 2,
      "enunciado": "Desenvolva uma função chamada ehPalindromo que verifica se uma palavra ou frase é um palíndromo (ou seja, pode ser lida da mesma forma de trás para frente, desconsiderando espaços, pontuações e maiúsculas).",
      "nomeFuncao": "ehPalindromo",
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "('arara')",
          "saida": "true"
        },
        {
          "entrada": "('A base do teto desaba')",
          "saida": "true"
        },
        {
          "entrada": "('OpenAI')",
          "saida": "false"
        }
      ],
      "notas": "Considere remover espaços e converter para minúsculas antes de fazer a verificação."
    },
    {
      "id": 3,
      "enunciado": "Escreva uma função chamada contaVogais que recebe uma string e retorna o número de vogais presentes nela.",
      "nomeFuncao": "contaVogais",
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "('hello')",
          "saida": "2"
        },
        {
          "entrada": "('why')",
          "saida": "0"
        }
      ],
      "notas": "Considere as vogais 'a', 'e', 'i', 'o', 'u' tanto em minúsculas quanto em maiúsculas."
    },
    {
      "id": 4,
      "enunciado": "Crie uma função chamada celsiusParaFahrenheit que converte uma temperatura em Celsius para Fahrenheit utilizando a fórmula F = C * 9/5 + 32.",
      "nomeFuncao": "celsiusParaFahrenheit",
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(0)",
          "saida": "32"
        },
        {
          "entrada": "(-30)",
          "saida": "-22"
        },
        {
          "entrada": "(100)",
          "saida": "212"
        }
      ],
      "notas": "Use operações aritméticas básicas para realizar a conversão."
    },
    {
      "id": 5,
      "enunciado": "Implemente uma função chamada maximo que recebe três números e retorna o maior deles.",
      "nomeFuncao": "maximo",
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(1, 2, 3)",
          "saida": "3"
        },
        {
          "entrada": "(10, 20, 5)",
          "saida": "20"
        }
      ],
      "notas": "Considere usar a função Math.max() ou uma série de instruções if para comparar os valores."
    },
    {
      "id": 6,
      "enunciado": "Crie uma função chamada somaDoisNumeros que recebe dois números e retorna a soma deles.",
      "nomeFuncao": "somaDoisNumeros",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "8"
        },
        {
          "entrada": "(-2, 7)",
          "saida": "5"
        }
      ],
      "notas": "Certifique-se de que a função retorna o resultado correto para números negativos também."
    },
    {
      "id": 7,
      "enunciado": "Crie uma função chamada isPar que recebe um número e retorna true se o número for par e false caso contrário.",
      "nomeFuncao": "isPar",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(4)",
          "saida": "true"
        },
        {
          "entrada": "(7)",
          "saida": "false"
        }
      ],
      "notas": "Use o operador módulo (%) para verificar se o número é par."
    },
    {
      "id": 8,
      "enunciado": "Crie uma função chamada verificaIdade que recebe a idade de uma pessoa e retorna se ela é maior de idade (18 anos ou mais).",
      "nomeFuncao": "verificaIdade",
      "categoria": "Estruturas de Controle",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(20)",
          "saida": "\"Maior de idade\""
        },
        {
          "entrada": "(16)",
          "saida": "\"Menor de idade\""
        }
      ],
      "notas": "Use uma estrutura condicional para verificar a idade."
    },
    {
      "id": 9,
      "enunciado": "Crie uma função chamada calculaMedia que recebe um array de números e retorna a média dos valores.",
      "nomeFuncao": "calculaMedia",
      "categoria": "Funções e Escopo",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "([10, 20, 30])",
          "saida": "20"
        },
        {
          "entrada": "([5, 5, 5, 5])",
          "saida": "5"
        }
      ],
      "notas": "Certifique-se de tratar arrays vazios retornando 0."
    },
    {
      "id": 10,
      "enunciado": "Crie uma função chamada contaPalavras que recebe uma string e retorna o número de palavras na string.",
      "nomeFuncao": "contaPalavras",
      "categoria": "Manipulação de Strings e Arrays",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "\"Olá, como você está?\"",
          "saida": "4"
        },
        {
          "entrada": "\"Uma frase com várias palavras.\"",
          "saida": "5"
        }
      ],
      "notas": "Considere palavras como sequências de caracteres separadas por espaços."
    },
    {
      "id": 11,
      "enunciado": "Crie uma função chamada encontraMaior que recebe um array de números e retorna o maior valor.",
      "nomeFuncao": "encontraMaior",
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "([1, 2, 3, 4, 5])",
          "saida": "5"
        },
        {
          "entrada": "([10, 20, 30, 5])",
          "saida": "30"
        }
      ],
      "notas": "Use uma abordagem iterativa para encontrar o maior número."
    },
    {
      "id": 12,
      "enunciado": "Crie uma função chamada alteraTexto que altera o texto de um elemento HTML com um determinado id.",
      "nomeFuncao": "alteraTexto",
      "categoria": "Manipulação do DOM e Eventos",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "\"meuId\", \"Novo texto\"",
          "saida": "O texto do elemento com id \"meuId\" é alterado para \"Novo texto\""
        }
      ],
      "notas": "Use document.getElementById e innerText para alterar o texto."
    },
    {
      "id": 13,
      "enunciado": "Crie uma função chamada fetchDados que faz uma requisição GET a uma URL e retorna os dados.",
      "nomeFuncao": "fetchDados",
      "categoria": "Programação Assíncrona",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "\"https://api.exemplo.com/dados\"",
          "saida": "Os dados retornados da API"
        }
      ],
      "notas": "Use fetch e async/await para realizar a requisição."
    },
    {
      "id": 14,
      "enunciado": "Crie uma função chamada validaEmail que verifica se um e-mail está no formato correto.",
      "nomeFuncao": "validaEmail",
      "categoria": "Práticas de Boas Práticas e Debugging",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "\"teste@exemplo.com\"",
          "saida": "true"
        },
        {
          "entrada": "\"testeexemplo.com\"",
          "saida": "false"
        }
      ],
      "notas": "Use expressões regulares para validar o e-mail."
    },
    {
      "id": 15,
      "enunciado": "Encontre e corrija os erros na função somaArray que soma os elementos de um array.",
      "nomeFuncao": "e e corrija os erros na função somaArray",
      "categoria": "Correção de Bugs de Sintaxe",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "([1, 2, 3, 4])",
          "saida": "10"
        },
        {
          "entrada": "([10, 10, 10])",
          "saida": "30"
        }
      ],
      "notas": "A função contém pequenos erros de sintaxe e lógica que precisam ser corrigidos."
    },
    {
      "id": 16,
      "enunciado": "Desenvolva uma função chamada somaDoisNumeros que recebe dois números e retorna a soma deles.",
      "nomeFuncao": "somaDoisNumeros",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "8"
        },
        {
          "entrada": "(-2, 7)",
          "saida": "5"
        }
      ],
      "notas": "Certifique-se de que a função retorna o resultado correto para números negativos também."
    },
    {
      "id": 17,
      "enunciado": "Desenvolva uma função chamada isPar que recebe um número e retorna true se o número for par e false caso contrário.",
      "nomeFuncao": "isPar",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(4)",
          "saida": "true"
        },
        {
          "entrada": "(7)",
          "saida": "false"
        }
      ],
      "notas": "Use o operador módulo (%) para verificar se o número é par."
    },
    {
      "id": 18,
      "enunciado": "Desenvolva uma função chamada verificaIdade que recebe a idade de uma pessoa e retorna se ela é maior de idade (18 anos ou mais).",
      "nomeFuncao": "verificaIdade",
      "categoria": "Estruturas de Controle",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(20)",
          "saida": "\"Maior de idade\""
        },
        {
          "entrada": "(16)",
          "saida": "\"Menor de idade\""
        }
      ],
      "notas": "Use uma estrutura condicional para verificar a idade."
    },
    {
      "id": 19,
      "enunciado": "Desenvolva uma função chamada calculaMedia que recebe um array de números e retorna a média dos valores.",
      "nomeFuncao": "calculaMedia",
      "categoria": "Funções e Escopo",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "([10, 20, 30])",
          "saida": "20"
        },
        {
          "entrada": "([5, 5, 5, 5])",
          "saida": "5"
        }
      ],
      "notas": "Certifique-se de tratar arrays vazios retornando 0."
    },
    {
      "id": 20,
      "enunciado": "Desenvolva uma função chamada contaPalavras que recebe uma string e retorna o número de palavras na string.",
      "nomeFuncao": "contaPalavras",
      "categoria": "Manipulação de Strings e Arrays",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "\"Olá, como você está?\"",
          "saida": "4"
        },
        {
          "entrada": "\"Uma frase com várias palavras.\"",
          "saida": "5"
        }
      ],
      "notas": "Considere palavras como sequências de caracteres separadas por espaços."
    },
    {
      "id": 21,
      "enunciado": "Desenvolva uma função chamada encontraMaior que recebe um array de números e retorna o maior valor.",
      "nomeFuncao": "encontraMaior",
      "categoria": "Lógica e Algoritmos",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "([1, 2, 3, 4, 5])",
          "saida": "5"
        },
        {
          "entrada": "([10, 20, 30, 5])",
          "saida": "30"
        }
      ],
      "notas": "Use uma abordagem iterativa para encontrar o maior número."
    },
    {
      "id": 22,
      "enunciado": "Desenvolva uma função chamada alteraTexto que altera o texto de um elemento HTML com um determinado id.",
      "nomeFuncao": "alteraTexto",
      "categoria": "Manipulação do DOM e Eventos",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "\"meuId\", \"Novo texto\"",
          "saida": "O texto do elemento com id \"meuId\" é alterado para \"Novo texto\""
        }
      ],
      "notas": "Use document.getElementById e innerText para alterar o texto."
    },
    {
      "id": 23,
      "enunciado": "Desenvolva uma função chamada fetchDados que faz uma requisição GET a uma URL e retorna os dados.",
      "nomeFuncao": "fetchDados",
      "categoria": "Programação Assíncrona",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "\"https://api.exemplo.com/dados\"",
          "saida": "Os dados retornados da API"
        }
      ],
      "notas": "Use fetch e async/await para realizar a requisição."
    },
    {
      "id": 24,
      "enunciado": "Desenvolva uma função chamada validaEmail que verifica se um e-mail está no formato correto.",
      "nomeFuncao": "validaEmail",
      "categoria": "Práticas de Boas Práticas e Debugging",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "\"teste@exemplo.com\"",
          "saida": "true"
        },
        {
          "entrada": "\"testeexemplo.com\"",
          "saida": "false"
        }
      ],
      "notas": "Use expressões regulares para validar o e-mail."
    },
    {
      "id": 25,
      "enunciado": "Crie uma função chamada encontraIndices que recebe um array e um valor, e retorna os índices onde o valor aparece no array.",
      "nomeFuncao": "encontraIndices",
      "categoria": "Manipulação do DOM e Eventos",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Itere pelo array verificando as posições onde o valor aparece."
    },
    {
      "id": 26,
      "enunciado": "Crie uma função chamada menorNumero que recebe um array de números e retorna o menor valor.",
      "nomeFuncao": "menorNumero",
      "categoria": "Programação Assíncrona",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Itere pelo array comparando os valores para encontrar o menor."
    },
    {
      "id": 27,
      "enunciado": "Crie uma função chamada inverteString que recebe uma string e retorna a string invertida.",
      "nomeFuncao": "inverteString",
      "categoria": "Manipulação de Strings e Arrays",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Use métodos de string e array para inverter a string."
    },
    {
      "id": 28,
      "enunciado": "Crie uma função chamada ordenaArray que recebe um array de números e retorna o array ordenado em ordem crescente.",
      "nomeFuncao": "ordenaArray",
      "categoria": "Manipulação de Strings e Arrays",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Use o método sort() de array para ordenar os números."
    },
    {
      "id": 29,
      "enunciado": "Crie uma função chamada converteParaMaiusculas que recebe uma string e retorna a string em letras maiúsculas.",
      "nomeFuncao": "converteParaMaiusculas",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Médio",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Use o método toUpperCase() de string."
    },
    {
      "id": 30,
      "enunciado": "Crie uma função chamada multiplicaNumeros que recebe dois números e retorna o produto deles.",
      "nomeFuncao": "multiplicaNumeros",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Use o operador de multiplicação (*) para calcular o produto."
    },
    {
      "id": 31,
      "enunciado": "Crie uma função chamada ehPrimo que verifica se um número é primo.",
      "nomeFuncao": "ehPrimo",
      "categoria": "Práticas de Boas Práticas e Debugging",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Verifique se o número tem divisores além de 1 e ele mesmo."
    },
    {
      "id": 32,
      "enunciado": "Crie uma função chamada calculaFatorial que recebe um número e retorna o seu fatorial.",
      "nomeFuncao": "calculaFatorial",
      "categoria": "Funções e Escopo",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Use um loop ou recursão para calcular o fatorial."
    },
    {
      "id": 33,
      "enunciado": "Crie uma função chamada somaArray que recebe um array de números e retorna a soma de todos os elementos.",
      "nomeFuncao": "somaArray",
      "categoria": "Funções e Escopo",
      "dificuldade": "Difícil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Itere pelo array somando cada elemento."
    },
    {
      "id": 34,
      "enunciado": "Crie uma função chamada validaSenha que verifica se uma senha é forte (contém pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, e um número).",
      "nomeFuncao": "validaSenha",
      "categoria": "Fundamentos de Programação",
      "dificuldade": "Fácil",
      "exemplos": [
        {
          "entrada": "(3, 5)",
          "saida": "15"
        }
      ],
      "notas": "Use expressões regulares para validar a senha."
    }
  ]

  obterExemploPorId(id: number){
    return this.exercicios.find( exercicio => exercicio.id == id);
  }

  constructor() { }
}
