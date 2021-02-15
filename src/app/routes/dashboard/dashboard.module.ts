import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "../../shared/shared.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { Dashboardv1Component } from "./dashboardv1/dashboardv1.component";
import { Dashboardv2Component } from "./dashboardv2/dashboardv2.component";
import { Dashboardv3Component } from "./dashboardv3/dashboardv3.component";
import { Dashboardv4Component } from "./dashboardv4/dashboardv4.component";
import { Dashboardv5Component } from "./dashboardv5/dashboardv5.component";
import { Dashboardv6Component } from "./dashboardv6/dashboardv6.component";
import { Dashboardv7Component } from "./dashboardv7/dashboardv7.component";
import { Dashboardv8Component } from "./dashboardv8/dashboardv8.component";
import { Dashboardv9Component } from "./dashboardv9/dashboardv9.component";
import { Dashboardv12Component } from "./dashboardv12/dashboardv12.component";
import { Dashboardv13Component } from "./dashboardv13/dashboardv13.component";
import { RutaaccesoComponent } from "./rutaacceso/rutaacceso.component";
import { CiudadesComponent } from "./ciudades/ciudades.component";
import { TarjetasComponent } from "./tarjetas/tarjetas.component";
import { SectoresComponent } from "./sectores/sectores.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
  { path: "", redirectTo: "dashboard" },
  { path: "v1", component: Dashboardv1Component },
  { path: "v2", component: Dashboardv2Component },
  { path: "v3", component: Dashboardv3Component },
  { path: "v4", component: Dashboardv4Component },
  { path: "v5", component: Dashboardv5Component },
  { path: "v6", component: Dashboardv6Component },
  { path: "v7", component: Dashboardv7Component },
  { path: "v8", component: Dashboardv8Component },
  { path: "v9", component: Dashboardv9Component },
  { path: "v12", component: Dashboardv12Component },
  { path: "v13", component: Dashboardv13Component },
  { path: "rutaacceso", component: RutaaccesoComponent },
  { path: "ciudades", component: CiudadesComponent },
  { path: "tarjetas", component: TarjetasComponent },
  { path: "sectores", component: SectoresComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    //BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Dashboardv1Component,
    Dashboardv2Component,
    Dashboardv3Component,
    Dashboardv4Component,
    Dashboardv5Component,
    Dashboardv6Component,
    Dashboardv7Component,
    Dashboardv8Component,
    Dashboardv9Component,
    Dashboardv12Component,
    Dashboardv13Component,
    RutaaccesoComponent,
    CiudadesComponent,
    TarjetasComponent,
    SectoresComponent,
  ],
  exports: [RouterModule],
  bootstrap: [Dashboardv3Component],
})
export class DashboardModule {}
