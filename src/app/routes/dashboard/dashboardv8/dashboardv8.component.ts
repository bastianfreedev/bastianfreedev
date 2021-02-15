import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EnterpriseService } from "../../../shared/services/enterprise.service";
import Helpers from "../../../shared/utils/helpers";
import {
  Citie,
  Commune,
  Enterprise,
  Region,
} from "../../../shared/interfaces/enterprise";

const { validate, clean, format } = require("rut.js");
const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: "app-dashboardv8",
  templateUrl: "./dashboardv8.component.html",
  styleUrls: ["./dashboardv8.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class Dashboardv8Component implements OnInit {
  communes: Commune[] = [
    { id_comuna: "1", nombre_comuna: "Quinta Normal", estado: true },
  ];
  regions: Region[] = [
    { id_region: "1", nombre_region: "Region Metropolitana", estado: true },
  ];
  cities: Citie[] = [
    { id_ciudad: "1", nombre_ciudad: "Santiago", estado: true },
  ];
  enterprises: Enterprise[] = [
    {
      codigo_empresa: "em04",
      nombre_empresa: "Femase",
      empresa_rut: "1-9",
      empresa_direccion: "La Rioja 2645",
      empresa_comuna: 1,
      empresa_ciudad: 2,
      empresa_region: 3,
      estado: true,
    },
  ];
  //profileForm colección de datos
  profileForm = new FormGroup({
    codigo_empresa: new FormControl(""),
    nombre_empresa: new FormControl(""),
    empresa_rut: new FormControl(""),
    empresa_direccion: new FormControl(""),
    empresa_comuna: new FormControl("1"),
    empresa_ciudad: new FormControl("1"),
    empresa_region: new FormControl("1"),
    estado: new FormControl(true),
    //ultima_modificacion: new FormControl(Helpers.getDateTime()),
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

  columns = [{ prop: "codigo_empresa", name: "Codigo" }];
  columnsSort = [{ prop: "codigo_empresa" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("myTable") tableExp: any;

  //MODAL
  modalRef: BsModalRef;

  //enterprises: Observable<any[]>;

  constructor(
    private modalService: BsModalService,
    private enterpriseApi: EnterpriseService
  ) {
    this.enterpriseApi.getEnterprises().then((res) => {
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
  }

  refresh() {
    this.enterpriseApi.getEnterprises().then((res) => {
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
      codigo_empresa: new FormControl(""),
      nombre_empresa: new FormControl(""),
      empresa_rut: new FormControl(""),
      empresa_direccion: new FormControl(""),
      empresa_comuna: new FormControl("1"),
      empresa_ciudad: new FormControl("1"),
      empresa_region: new FormControl("1"),
      estado: new FormControl(true),
      //ultima_modificacion: new FormControl(Helpers.getDateTime()),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.warn(this.profileForm.value);
    this.enterpriseApi
      .postEnterprises(this.profileForm.value)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  onSubmitUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.log("[UPDATE] :", this.profileForm.value);
    this.enterpriseApi
      .putEnterprises(this.profileForm.value)
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
      codigo_empresa: new FormControl(data.codigo_empresa),
      nombre_empresa: new FormControl(data.nombre_empresa),
      empresa_rut: new FormControl(data.empresa_rut),
      empresa_direccion: new FormControl(data.empresa_direccion),
      empresa_comuna: new FormControl(data.empresa_comuna),
      empresa_ciudad: new FormControl(data.empresa_ciudad),
      empresa_region: new FormControl(data.empresa_region),
      estado: new FormControl(data.estado),
      //ultima_modificacion: new FormControl(Helpers.getDateTime()),
    });
  }

  validateRut(rut) {
    console.log(rut);
    if (validate(rut)) {
      this.profileForm.controls.empresa_rut.setValue(format(rut));
      //this.profileForm.controls("").dni = format(rut);
    } else {
      alert("rut invalido");
      this.profileForm.controls.empresa_rut.setValue("");
    }
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
    //
    this.enterpriseApi.getEnterprises().then((res: any) => {
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
      return d.codigo_empresa.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updateFilterNombre(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.nombre_empresa.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  // Selection

  onSelect({ selected }) {
    console.log("Select Event", selected, this.selected);
  }

  onActivate(event) {
    console.log("Activate Event", event);
  }
}
