import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioService } from '../../services/exercicio.service';
import { IExercicio } from 'src/app/modules/shared/interfaces/exercicio.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { EditorView , minimalSetup} from 'codemirror';
import { javascript } from "@codemirror/lang-javascript"

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrl: './exercicio.component.scss',
})
export class ExercicioComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editorCodigo!: ElementRef;
  exercicio: IExercicio | undefined;
  editorViewCodeMirror: EditorView | undefined;
  exibeLoading = false;
  exibePontuacao = false;
  exibeException = false;
  percentualPontuacao: number = 0;
  exception: string | undefined;

  constructor( private _exercicioService: ExercicioService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngAfterViewInit(): void {
    this._buildarCodeMirror();
  }  

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this._obterExercicio(params.idExercicio);
    });
    
  }

  private _buildarCodeMirror(){
    this.editorViewCodeMirror = new EditorView({
      extensions: [minimalSetup, javascript()],
      parent: this.editorCodigo.nativeElement,

    });

  }

  private _obterExercicio(idExercicio: string){
    if(idExercicio){
      this.exercicio = this._exercicioService.obterExemploPorId(Number(idExercicio))
    } 
    else {
      console.log("404")
    }
  }

  runCodigo(){
    const content: string | undefined = this.editorViewCodeMirror?.state.doc.toString();
    if(content && this.exercicio){
      this.exibeLoading = true;
      let pontuacaoMaxima = this.exercicio.exemplos.length;
      let pontuacaoAtual = 0;
      let exception: string | undefined;
      const nomeFuncao = this.exercicio.nomeFuncao;
      for(const exemplo of this.exercicio.exemplos){
        const runner = content + nomeFuncao + exemplo.entrada;
        try {
          const resultado =  eval(runner);
          pontuacaoAtual = resultado == exemplo.saida ? pontuacaoAtual + 1 : pontuacaoAtual;
        } catch (error) {
          exception = error?.toString();
          break;
        }
      } 
      this.percentualPontuacao = pontuacaoAtual * 100/pontuacaoMaxima;
      this.exception = exception;
      this.exibeLoading = false;
      this.exibePontuacao = !exception;
      this.exibeException = !!exception;
    } 

  }

  tentarNovamente(){
    this.exibePontuacao = false;
    this.exibeException = false;
  }

  proximaQuestao(){
    
    let idExercicioAtual = this.exercicio?.id || 0;
    console.log(idExercicioAtual)
    console.log(`/exercicio/${idExercicioAtual++}`)
    this.router.navigate(['/exercicio', idExercicioAtual++]);
  }


}
