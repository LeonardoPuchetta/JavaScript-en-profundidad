// importar modulos del router de angular ;

import {  ModuleWithProviders } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';

// importar componentes ;

import {ZapatosComponent} from './zapatos/zapatos.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/compiler/src/core';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';

// creacion del array de configuracion de rutas ;

const appRoutes: Routes = [
{path: '' , component: HomeComponent},    // ruta por default;
{path: 'home' , component: HomeComponent},
{path: 'zapatos' , component: ZapatosComponent},
{path: 'videojuego' , component: VideojuegoComponent},
{path: 'cursos' , component: CursosComponent},
{path: 'cursos/:nombre/:followers' , component: CursosComponent},
{path: 'externo' , component: ExternoComponent},
{path: 'contacto' , component: ContactoComponent},
{path: '**', component: HomeComponent}            // cuando no encuentra ningun componente se ejecuta la 404;
];

// exportar el modulo del router y servicio ;

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
