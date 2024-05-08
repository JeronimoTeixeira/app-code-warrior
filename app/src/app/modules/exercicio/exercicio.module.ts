import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioService } from './services/exercicio.service';
import { provideRouter } from '@angular/router';
import { exercicioRoutes } from './exercicio.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ExercicioService,
    provideRouter(exercicioRoutes)
  ]
})
export class ExercicioModule { }
