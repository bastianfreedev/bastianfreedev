import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormControl } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { TimepickerConfig } from "ngx-bootstrap/timepicker";
import Helpers from "../../../shared/utils/helpers";
import { EnterpriseService } from "../../../shared/services/enterprise.service";
import { Validators } from "@angular/forms";

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: "app-dashboardv7",
  templateUrl: "./dashboardv7.component.html",
  styleUrls: ["./dashboardv7.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class Dashboardv7Component implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  timePickerConfig: Partial<TimepickerConfig>;
  //profileForm colección de datos
  profileForm = new FormGroup({
    usr_username: new FormControl(""),
    usr_password: new FormControl(""),
    estado_id: new FormControl(""),
    usr_nombres: new FormControl(""),
    usr_ape_paterno: new FormControl(""),
    usr_ape_materno: new FormControl(""),
    usr_perfil_id: new FormControl(""),
    usr_email: new FormControl(""),
    usr_fecha_ultima_conexion: new FormControl(Helpers.getDateTime()),
    empresa_id: new FormControl(""),
    fecha_creacion: new FormControl(Helpers.getDateTime()),
    ultima_actualizacion: new FormControl(Helpers.getDateTime()),
  });
  //NGXDATATABLE
  status = [
    {
      id: 1,
      name: "Vigente",
    },
    {
      id: 2,
      name: "No Vigente",
    },
  ];

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

  columns = [{ prop: "usr_username" }, { name: "Usuario" }];
  columnsSort = [{ prop: "usr_username" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("myTable") tableExp: any;

  //MODAL
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private enterpriseApi: EnterpriseService
  ) {
    this.enterpriseApi.getUsers().then((res) => {
      console.log(res);
    });

    this.datePickerConfig = Object.assign(
      {},
      { containerClass: "theme-dark-blue" }
    );
    this.timePickerConfig = Object.assign({});

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
    this.enterpriseApi.getUsers().then((res) => {
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
      usr_username: new FormControl(""),
      estado_id: new FormControl(""),
      usr_nombres: new FormControl(""),
      usr_ape_paterno: new FormControl(""),
      usr_ape_materno: new FormControl(""),
      usr_perfil_id: new FormControl(""),
      usr_email: new FormControl(""),
      usr_fecha_ultima_conexion: new FormControl(Helpers.getDateTime()),
      empresa_id: new FormControl(""),
      fecha_creacion: new FormControl(Helpers.getDateTime()),
      usr_password: new FormControl(""),
      ultima_actualizacion: new FormControl(Helpers.getDateTime()),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.warn(this.profileForm.value);
    this.enterpriseApi
      .postUsers(this.profileForm.value)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  onSubmitUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.log("[UPDATE] :", this.profileForm.value);
    this.enterpriseApi
      .putUsers(this.profileForm.value)
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
      usr_username: new FormControl(data.usr_username),
      estado_id: new FormControl(data.estado_id),
      usr_nombres: new FormControl(data.usr_nombres),
      usr_ape_paterno: new FormControl(data.usr_ape_paterno),
      usr_ape_materno: new FormControl(data.usr_ape_materno),
      usr_perfil_id: new FormControl(data.usr_perfil_id),
      usr_email: new FormControl(data.usr_email),
      usr_fecha_ultima_conexion: new FormControl(
        data.usr_fecha_ultima_conexion
      ),
      empresa_id: new FormControl(data.empresa_id),
      fecha_creacion: new FormControl(data.fecha_creacion),
      usr_password: new FormControl(data.usr_password),
      ultima_actualizacion: new FormControl(data.ultima_actualizacion),
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
    this.enterpriseApi.getUsers().then((res: any) => {
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
      return d.usr_username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updateFilterNombre(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.usr_nombres.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rowsFilter = temp;

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
