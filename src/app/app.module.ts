import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from './components/edit/edit.component';
import { ResaltadoDirective } from './resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
