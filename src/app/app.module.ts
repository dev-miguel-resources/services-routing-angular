import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { APP_ROUTING } from "./app.routes";

// Services
import { AnimalesService } from "./services/animales.service";

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalTarjetaComponent } from './components/animal-tarjeta/animal-tarjeta.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnimalComponent,
    AnimalTarjetaComponent,
    AnimalesComponent,
    BuscadorComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }) 
  ],
  providers: [AnimalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
