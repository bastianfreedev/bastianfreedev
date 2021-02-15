import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { NgxSelectModule } from 'ngx-select-ex'
import { TextMaskModule } from 'angular2-text-mask';
import { TagInputModule } from 'ngx-chips';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';

import { CargacencosComponent } from './cargacencos/cargacencos.component';
import { CargadepartamentoComponent } from './cargadepartamento/cargadepartamento.component';
import { CargaempleadosComponent } from './cargaempleados/cargaempleados.component';
import { CargausuariosComponent } from './cargausuarios/cargausuarios.component';
import { CargamasivadedispositivosComponent } from './cargamasivadedispositivos/cargamasivadedispositivos.component';
import { CargamasivaderfidComponent } from './cargamasivaderfid/cargamasivaderfid.component';


const routes: Routes = [
    { path: '', redirectTo: 'cargadesdearchivo' },
    { path: 'cargacencos', component: CargacencosComponent },
    { path: 'cargadepartamento', component: CargadepartamentoComponent },
    { path: 'cargaempleados', component: CargaempleadosComponent },
    { path: 'cargausuarios', component: CargausuariosComponent },
    { path: 'cargamasivadedispositivos', component: CargamasivadedispositivosComponent },
    { path: 'cargamasivaderfid', component: CargamasivaderfidComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule,
        ColorPickerModule,
        TextMaskModule,
        TagInputModule,
        CustomFormsModule,
        FileUploadModule,
        ImageCropperModule
    ],
    providers: [
        ColorPickerService
    ],
    declarations: [
        CargacencosComponent,
        CargadepartamentoComponent,
        CargaempleadosComponent,
        CargausuariosComponent,
        CargamasivadedispositivosComponent,
        CargamasivaderfidComponent
    ],
    exports: [
        RouterModule
    ]
})
export class CargadesdearchivoModule { }