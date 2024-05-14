import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorView , minimalSetup, basicSetup} from 'codemirror';
import { javascript } from "@codemirror/lang-javascript"
import { IExercicio } from '../../interfaces/exercicio.interface';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent implements AfterViewInit {
  @ViewChild('editor') editorCodigo!: ElementRef;
  private editorViewCodeMirror: EditorView | undefined;

  @Input() exercicio: IExercicio | undefined;
  @Output() resultados = new EventEmitter<number>();
  @Output() exception = new EventEmitter<string>();
  
  
  ngAfterViewInit(): void {
    this._buildarCodeMirror();
  } 

  private _buildarCodeMirror(){
    this.editorViewCodeMirror = new EditorView({
      extensions: [basicSetup, javascript() ],
      parent: this.editorCodigo.nativeElement,
    });
  }

  runCodigo(){
    const content: string | undefined = this.editorViewCodeMirror?.state.doc.toString();
    if(content && this.exercicio){
      // this.exibeLoading = true;
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

      if(exception) this.exception.emit(exception);
      else this.resultados.emit(pontuacaoAtual * 100/pontuacaoMaxima)
      
    } 

  }

}
