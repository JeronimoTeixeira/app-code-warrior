import { ExtraOptions, Route } from '@angular/router';
import { ExercicioModule } from './modules/exercicio/exercicio.module';

export const appRoutes: Route[] = [
    {
        path: 'exercicio',
        loadChildren: () => import('./modules/exercicio/exercicio.module').then( m=> m.ExercicioModule)
    }
];

