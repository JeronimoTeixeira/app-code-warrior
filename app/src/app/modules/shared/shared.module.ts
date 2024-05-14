import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { CodeComponent } from './components/code/code.component';



@NgModule({
  declarations: [
    LoadingComponent,
    CodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    CodeComponent
  ]

})
export class SharedModule { }
