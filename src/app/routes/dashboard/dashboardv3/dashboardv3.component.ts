import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
  OnDestroy,
} from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import * as moment from "moment";
import { EnterpriseService } from "../../../shared/services/enterprise.service";

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: "app-dashboardv3",
  templateUrl: "./dashboardv3.component.html",
  styleUrls: ["./dashboardv3.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class Dashboardv3Component implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  //profileForm colección de datos
  profileForm = new FormGroup({
    run_empleado: new FormControl(""),
    codigo_empleado: new FormControl(""),
    nombres: new FormControl(""),
    ape_pat_empleado: new FormControl(""),
    ape_mat_empleado: new FormControl(""),
    fecha_inicio_contrato: new FormControl(""),
    fecha_fin_contrato: new FormControl(""),
    email: new FormControl(""),
    empleado_comuna: new FormControl(""),
    empleado_direccion: new FormControl(""),
    empleado_region: new FormControl(""),
    empleado_ciudad: new FormControl(""),
    tipo_usuario: new FormControl(""),
    id_cargo: new FormControl(""),
    estado: new FormControl(true),
  });
  //NGXDATATABLE
  editing = {};
  rows = [];
  rowsFilter = [];
  rowsExp = [];
  rowsSort = [];
  temp = [];
  expanded: any = {};
  timeout: any;

  rowsSel = [];
  selected = [];

  columns = [{ prop: "run_empleado" }, { name: "Run" }];
  columnsSort = [{ prop: "run_empleado" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("myTable") tableExp: any;

  //MODAL
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private enterpriseApi: EnterpriseService
  ) {
    this.enterpriseApi.getEmployees().then((res) => {
      console.log(res);
    });

    this.datePickerConfig = Object.assign(
      {},
      { containerClass: "theme-dark-blue" }
    );

    this.fetch((data) => {
      // cache our list
      this.temp = _clone(data);
      this.rows = _clone(data);
      this.rowsFilter = _clone(data);
      this.rowsExp = _clone(data);
      this.rowsSort = _clone(data);
      this.rowsSel = _clone(data);
    });
  }

  refresh() {
    this.enterpriseApi.getEmployees().then((res) => {
      console.log(res);
    });

    this.fetch((data) => {
      // cache our list
      this.temp = _clone(data);
      this.rows = _clone(data);
      this.rowsFilter = _clone(data);
      this.rowsExp = _clone(data);
      this.rowsSort = _clone(data);
      this.rowsSel = _clone(data);
    });

    this.profileForm = new FormGroup({
      run_empleado: new FormControl(""),
      codigo_empleado: new FormControl(""),
      nombres: new FormControl(""),
      ape_pat_empleado: new FormControl(""),
      ape_mat_empleado: new FormControl(""),
      fecha_inicio_contrato: new FormControl(""),
      fecha_fin_contrato: new FormControl(""),
      email: new FormControl(""),
      empleado_comuna: new FormControl(""),
      empleado_direccion: new FormControl(""),
      empleado_region: new FormControl(""),
      empleado_ciudad: new FormControl(""),
      tipo_usuario: new FormControl(""),
      id_cargo: new FormControl(""),
      estado: new FormControl(true),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.warn(this.profileForm.value);
    this.enterpriseApi
      .postEmployees(this.profileForm.value)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  onSubmitUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.log("[UPDATE] :", this.profileForm.value);
    this.enterpriseApi
      .putEmployees(this.profileForm.value)
      .then((res) => {
        this.refresh();
        console.log("[Actualizado]: ", res);
      })
      .catch((err) => console.error(err));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalEdit(template: TemplateRef<any>, data) {
    this.modalRef = this.modalService.show(template);
    console.log(data);
    //
    this.profileForm = new FormGroup({
      run_empleado: new FormControl(data.run_empleado),
      codigo_empleado: new FormControl(data.codigo_empleado),
      nombres: new FormControl(data.nombres),
      ape_pat_empleado: new FormControl(data.ape_pat_empleado),
      ape_mat_empleado: new FormControl(data.ape_mat_empleado),
      fecha_inicio_contrato: new FormControl(data.fecha_inicio_contrato),
      fecha_fin_contrato: new FormControl(data.fecha_fin_contrato),
      email: new FormControl(data.email),
      empleado_comuna: new FormControl(data.empleado_comuna),
      empleado_direccion: new FormControl(data.empleado_direccion),
      empleado_region: new FormControl(data.empleado_region),
      empleado_ciudad: new FormControl(data.empleado_ciudad),
      tipo_usuario: new FormControl(data.tipo_usuario),
      id_cargo: new FormControl(data.id_cargo),
      estado: new FormControl(data.estado),
    });
  }

  ngOnInit() {}

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log("paged!", event);
    }, 100);
  }
  toggleExpandRow(row) {
    console.log("Toggled Expand Row!", row);
    this.tableExp.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log("Detail Toggled", event);
  }

  fetch(cb) {
    this.enterpriseApi.getEmployees().then((res: any) => {
      cb(res.data);
      //debugger;
    });
    //const req = new XMLHttpRequest();
    //req.open("GET", `http://192.168.1.90/v1/Empresas`);

    //req.onload = () => {

    //};

    //req.send();
  }

  updateValue(event, cell, rowIndex) {
    console.log("inline editing rowIndex", rowIndex);
    this.editing[rowIndex + "-" + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log("UPDATED!", this.rows[rowIndex][cell]);
  }

  //ngOnInit() {}

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.run_empleado.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  // Selection

  onSelect({ selected }) {
    console.log("Select Event", selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log("Activate Event", event);
  }
}
