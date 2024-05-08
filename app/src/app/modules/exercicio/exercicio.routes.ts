import { Route } from '@angular/router';
import { ExercicioComponent } from './pages/exercicio/exercicio.component';

export const exercicioRoutes: Route[] = [
    {
        path: ':idExercicio',
        component: ExercicioComponent
    }
];
