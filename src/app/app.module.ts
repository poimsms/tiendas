import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TiendasModule } from './components/app-tiendas/tiendas.module';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/tools/navbar/navbar.component';import { SectionsComponent } from './components/tools/sections/sections.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegistroComponent } from './components/tools/registro/registro.component';
import { LoadingComponent } from './components/tools/loading/loading.component';
import { DesktopComponent } from './components/desktop/desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SectionsComponent,
    RegistroComponent,
    LoadingComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    TiendasModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    DeviceDetectorModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
