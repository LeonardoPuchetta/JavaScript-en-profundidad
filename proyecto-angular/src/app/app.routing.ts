// modulos del router

import {ModuleWithProviders} from '@angular/core' ;
import { Routes, RouterModule } from '@angular/router';

// importacion de componentes

import { Route } from '@angular/compiler/src/core';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [    // array de objetos de tipo Routes
    // una ruta por componente
{path: '', component: AboutComponent},
{path: 'sobre-mi', component: AboutComponent},
{path: 'proyectos', component: ProjectsComponent},
{path: 'crear-proyecto', component: CreateComponent},
{path: 'contacto', component: ContactComponent},
{path: 'proyecto/:id', component: DetailComponent},
{path: 'editar-proyecto/:id', component: EditComponent},
{path: '**', component: ErrorComponent}
];

// exportacion de array de rutas
export const appRoutingProviders: any[] = [];

// esportacion del modulo

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);



