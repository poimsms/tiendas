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

const routes: Routes = [

    { path: 'principal', component: PrincipalComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'agenda-config', component: AgendaConfigComponent },
    { path: 'cupon', component: CuponComponent },
    { path: 'formulario-inicio', component: FormularioInicioComponent },
    { path: 'tienda', component: TiendaComponent },

    { path: 'm-principal', component: MPrincipalComponent },
    { path: 'm-contenido', component: MContenidoComponent },
    { path: 'm-cupon', component: MCuponComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TiendasRountingModule { }
