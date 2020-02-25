import { ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes : Routes = [
  {path: "", component: AboutComponent},
  {path: "sobre-mi", component: AboutComponent},
  {path: "proyectos", component: ProjectComponent},
  {path: "crear-proyecto", component: CreateComponent},
  {path: "contacto", component: ContactComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);