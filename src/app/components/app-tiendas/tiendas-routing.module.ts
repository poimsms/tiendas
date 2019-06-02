import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './pages/principal/principal.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { FormularioInicioComponent } from './pages/formulario-inicio/formulario-inicio.component';
import { CuponComponent } from './pages/cupon/cupon.component';
import { AgendaConfigComponent } from './pages/agenda-config/agenda-config.component';

import { MPrincipalComponent } from './maqueta/m-principal/m-principal.component';
import { MContenidoComponent } from './maqueta/m-contenido/m-contenido.component';
import { MCuponComponent } from './maqueta/m-cupon/m-cupon.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { AgendaBuyComponent } from './pages/agenda-buy/agenda-buy.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

const routes: Routes = [

    { path: 'principal', component: PrincipalComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'agenda-config', component: AgendaConfigComponent },
    { path: 'duc/ofertas', component: CuponComponent },
    { path: 'duc/galeria', component: GaleriaComponent },

    { path: 'formulario-inicio', component: FormularioInicioComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'cupones', component: ProductosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'nuevo', component: NuevoComponent },
    { path: 'agenda/compra', component: AgendaBuyComponent },

    { path: 'm-principal', component: MPrincipalComponent },
    { path: 'duc', component: MContenidoComponent },
    { path: 'm-cupon', component: MCuponComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TiendasRoutingModule { }
