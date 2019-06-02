import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendasRoutingModule } from './tiendas-routing.module';
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
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { AgendaBuyComponent } from './pages/agenda-buy/agenda-buy.component';
import { InfoComponent } from './pages/info/info.component';
import { GiftcardComponent } from './pages/giftcard/giftcard.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

@NgModule({
  declarations: [
    TiendaComponent,
    PrincipalComponent,
    ContenidoComponent,
    AgendaComponent,
    AgendaConfigComponent,
    FormularioInicioComponent,
    CuponComponent,
    NuevoComponent,
    ProductosComponent,
    VentasComponent,
    MPrincipalComponent,
    MContenidoComponent,
    MCuponComponent,
    AgendaBuyComponent,
    InfoComponent,
    GiftcardComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    TiendasRoutingModule
  ],
  exports: [InfoComponent]
})
export class TiendasModule { }
