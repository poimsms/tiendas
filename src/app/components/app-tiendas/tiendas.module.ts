import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendasRountingModule } from './tiendas-rounting.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { PrincipalComponent } from './pages/principal/principal.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { CuponComponent } from './pages/cupon/cupon.component';

import { TiendaComponent } from './pages/tienda/tienda.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { FormularioInicioComponent } from './pages/formulario-inicio/formulario-inicio.component';
import { AgendaConfigComponent } from './pages/agenda-config/agenda-config.component';

import { MPrincipalComponent } from './maqueta/m-principal/m-principal.component';
import { MContenidoComponent } from './maqueta/m-contenido/m-contenido.component';
import { MCuponComponent } from './maqueta/m-cupon/m-cupon.component';

@NgModule({
  declarations: [
    TiendaComponent,
    PrincipalComponent,
    ContenidoComponent,
    AgendaComponent,
    AgendaConfigComponent,
    FormularioInicioComponent,
    CuponComponent,
    MPrincipalComponent,
    MContenidoComponent,
    MCuponComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    TiendasRountingModule
  ]
})
export class TiendasModule { }
