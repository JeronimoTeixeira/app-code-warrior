import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, WritableSignal, signal } from '@angular/core';
import { EditorView , minimalSetup, basicSetup} from 'codemirror';
import { javascript } from "@codemirror/lang-javascript"
import { IExercicio } from '../../interfaces/exercicio.interface';
import { IRuntime } from '../../interfaces/runtime.interface';
import { RunCodeService } from '../../services/run-code/run-code.service';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent implements AfterViewInit {
  @ViewChild('editor') editorCodigo!: ElementRef;
  private editorViewCodeMirror: EditorView | undefined;

  @Input() exercicio: IExercicio | undefined;
  @Output() resultados = new EventEmitter<IRuntime[]>();
  @Output() exception = new EventEmitter<string>();

  constructor(private runCodeService: RunCodeService){
    runCodeService.runCodeObs.subscribe( ()=>{
      this.runCodigo();
    })
  }
  
  
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
    let runTime: IRuntime[] = []
    console.log(this.exercicio)
    if(content && this.exercicio){
      let exception: string | undefined;
      const nomeFuncao = this.exercicio.nomeFuncao;
      for(const exemplo of this.exercicio.exemplos){
        const runner = content + nomeFuncao + exemplo.entrada;
        try {
          const resultado =  eval(runner);
          runTime.push({
            run: nomeFuncao+exemplo.entrada,
            resultado: resultado,
            sucesso: resultado.toString() == exemplo.saida
          })
        } catch (error) {
          exception = error?.toString();
          break;
        }
      } 

      if(exception) this.exception.emit(exception);
      else this.resultados.emit(runTime);
      
    } 

  }

}
