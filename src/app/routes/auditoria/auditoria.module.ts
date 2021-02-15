import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';


import { ErroresdesistemaComponent } from './erroresdesistema/erroresdesistema.component';
import { EventosdesistemaComponent } from './eventosdesistema/eventosdesistema.component';

const routes: Routes = [
  { path: '', redirectTo: 'auditoria' },
  { path: 'erroresdesistema', component: ErroresdesistemaComponent },
  { path: 'eventosdesistema', component: EventosdesistemaComponent },
];

@NgModule({
  imports: [
      SharedModule,
      RouterModule.forChild(routes),
      NgxDatatableModule
  ],
  declarations: [
    ErroresdesistemaComponent,
    EventosdesistemaComponent
  ],
  exports: [
      RouterModule
  ]
})
export class AuditoriaModule { }