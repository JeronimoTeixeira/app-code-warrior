import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioService } from '../../services/exercicio.service';
import { IExercicio } from 'src/app/modules/shared/interfaces/exercicio.interface';
import { ActivatedRoute } from '@angular/router';

import { EditorView , minimalSetup} from 'codemirror';
import { javascript } from "@codemirror/lang-javascript"

@Component({
  selector: 'app-exercicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio.component.html',
  styleUrl: './exercicio.component.scss',
})
export class ExercicioComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editorCodigo!: ElementRef;
  exercicio: IExercicio | undefined;
  editorViewCodeMirror: EditorView | undefined;

  constructor( private _exercicioService: ExercicioService,
    private route: ActivatedRoute
  ){}

  ngAfterViewInit(): void {
    this._buildarCodeMirror();
  }  

  ngOnInit(): void {
    this._obterExercicio();
  }

  private _buildarCodeMirror(){
    this.editorViewCodeMirror = new EditorView({
      extensions: [minimalSetup, javascript()],
      parent: this.editorCodigo.nativeElement,

    });

  }

  private _obterExercicio(){
    const idExercicio : string | null = this.route.snapshot.paramMap.get('idExercicio');
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
      const nomeFuncao = this.exercicio.nomeFuncao;
      for(const exemplo of this.exercicio.exemplos){
        const runner = content + nomeFuncao + exemplo.entrada;
        const resultado =  eval(runner);
        console.log(resultado);
      }
    } 
  }



}
