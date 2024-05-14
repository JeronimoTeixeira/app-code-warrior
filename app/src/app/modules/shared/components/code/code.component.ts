import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorView , minimalSetup} from 'codemirror';
import { javascript } from "@codemirror/lang-javascript"

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent implements AfterViewInit {
  @ViewChild('editor') editorCodigo!: ElementRef;
  editorViewCodeMirror: EditorView | undefined;

  ngAfterViewInit(): void {
    this._buildarCodeMirror();
  } 

  private _buildarCodeMirror(){
    this.editorViewCodeMirror = new EditorView({
      extensions: [minimalSetup, javascript()],
      parent: this.editorCodigo.nativeElement,
    });
  }


}
