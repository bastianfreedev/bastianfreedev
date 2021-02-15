import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ReporteusuariosComponent } from './reporteusuarios/reporteusuarios.component';
import { MarcaaccesoComponent } from './marcaacceso/marcaacceso.component';

const routes: Routes = [
  { path: '', redirectTo: 'reportesinformes'},
  { path: 'reporteusuarios', component: ReporteusuariosComponent},
  { path: 'marcaacceso', component: MarcaaccesoComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ReporteusuariosComponent,
    MarcaaccesoComponent
  ],
  exports: [
    RouterModule
  ]
})

export class ReportesinformesModule {}