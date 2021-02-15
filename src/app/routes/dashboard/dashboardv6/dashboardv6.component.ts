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
import { EnterpriseService } from "../../../shared/services/enterprise.service";

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: "app-dashboardv6",
  templateUrl: "./dashboardv6.component.html",
  styleUrls: ["./dashboardv6.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class Dashboardv6Component implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  timePickerConfig: Partial<TimepickerConfig>;
  //profileForm colección de datos
  profileForm = new FormGroup({
    codigo_turno: new FormControl(""),
    nombre_turno: new FormControl(""),
    fecha_creacion: new FormControl(""),
    fecha_inicio: new FormControl(""),
    fecha_fin: new FormControl(""),
    hora_inicio: new FormControl(""),
    hora_termino: new FormControl(""),
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

  columns = [{ prop: "codigo_turno" }, { name: "Codigo" }];
  columnsSort = [{ prop: "codigo_turno" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("myTable") tableExp: any;

  //MODAL
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private enterpriseApi: EnterpriseService
  ) {
    this.enterpriseApi.getShifts().then((res) => {
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
    this.enterpriseApi.getShifts().then((res) => {
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
      codigo_turno: new FormControl(""),
      nombre_turno: new FormControl(""),
      fecha_creacion: new FormControl(""),
      fecha_inicio: new FormControl(""),
      fecha_fin: new FormControl(""),
      hora_inicio: new FormControl(""),
      hora_termino: new FormControl(""),
      estado: new FormControl(true),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.warn(this.profileForm.value);
    this.enterpriseApi
      .postShifts(this.profileForm.value)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  onSubmitUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.log("[UPDATE] :", this.profileForm.value);
    this.enterpriseApi
      .putShifts(this.profileForm.value)
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
      codigo_turno: new FormControl(data.codigo_turno),
      nombre_turno: new FormControl(data.nombre_turno),
      fecha_creacion: new FormControl(data.fecha_creacion),
      fecha_inicio: new FormControl(data.fecha_inicio),
      fecha_fin: new FormControl(data.fecha_fin),
      hora_inicio: new FormControl(data.hora_inicio),
      hora_termino: new FormControl(data.hora_termino),
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
    this.enterpriseApi.getShifts().then((res: any) => {
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
      return d.codigo_turno.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updateFilterNombre(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.nombre_turno.toLowerCase().indexOf(val) !== -1 || !val;
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
