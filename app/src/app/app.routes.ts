import { ExtraOptions, Route } from '@angular/router';
import { ExercicioModule } from './modules/exercicio/exercicio.module';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then( m=> m.HomeModule)
    },
    {
        path: 'exercicio',
        loadChildren: () => import('./modules/exercicio/exercicio.module').then( m=> m.ExercicioModule)
    }
];

