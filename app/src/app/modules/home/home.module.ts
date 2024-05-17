import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { provideRouter } from '@angular/router';
import { homeRoutes } from './home.routes';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideRouter(homeRoutes)
  ]
})
export class HomeModule { }
