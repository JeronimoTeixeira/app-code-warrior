import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioService } from '../../services/exercicio.service';
import { IExercicio } from 'src/app/modules/shared/interfaces/exercicio.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { IRuntime } from 'src/app/modules/shared/interfaces/runtime.interface';
import { RunCodeService } from 'src/app/modules/shared/services/run-code/run-code.service';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrl: './exercicio.component.scss',
})
export class ExercicioComponent implements OnInit {
  protected exercicio: IExercicio | undefined;
  protected resultadosRuntime: IRuntime[] = []
  protected exibeLoading = false;
  protected exibePontuacao = false;
  protected exibeException = false;
  protected exibeInstrucoes = true;
  protected exibeCodigo = false;

  protected percentualPontuacao: number = 0;
  protected exception: string | undefined;

  constructor( private _exercicioService: ExercicioService,
    private route: ActivatedRoute,
    private router: Router,
    private runCodeService: RunCodeService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this._reinicializaPagina(params);
    
    });
    
  }

  private _reinicializaPagina(params: any){
    this.exibeLoading = false;
    this.exibePontuacao = false;
    this.exibeException = false;
    this.exibeInstrucoes = true;
    this.exibeCodigo = false;
    this.percentualPontuacao = 0;
    this.exception = undefined;
    this.resultadosRuntime = [];
    this._obterExercicio(params.idExercicio);
  }

  private _obterExercicio(idExercicio: string){
    if(idExercicio){
      this.exercicio = this._exercicioService.obterExemploPorId(Number(idExercicio))
    } 
    else {
      console.log("404")
    }
  }

  obterResultados(resultado: IRuntime[]){
    this.resultadosRuntime = resultado;
    this.exibePontuacao = true;
  }

  obterException(exception: string){
    this.exception = exception;
    this.exibeException = true;
  }

  proximaQuestao(){
    let idExercicioAtual = this.exercicio?.id || 0;
    idExercicioAtual++;
    this.router.navigate([`/exercicio/${idExercicioAtual}`]);
  }

  voltarQuestao(){
    let idExercicioAtual = this.exercicio?.id || 0;
    idExercicioAtual--;
    this.router.navigate([`/exercicio/${idExercicioAtual}`]);
  }

  navegaParaIntrucoes(){
    this.exibeInstrucoes = true;
    this.exibeCodigo = false;
  }

  navegaParaCodigo(){
    this.exibeInstrucoes = false;
    this.exibeCodigo = true;
  }

  runCodigo(){
    this.runCodeService.emitRunCode();
  }

}
