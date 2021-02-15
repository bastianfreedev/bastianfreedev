import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Observable } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { EnterpriseService } from "../../../shared/services/enterprise.service";

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: "app-ciudades",
  templateUrl: "./ciudades.component.html",
  styleUrls: ["./ciudades.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CiudadesComponent implements OnInit {
  //profileForm colección de datos
  profileForm = new FormGroup({
    id_ciudad: new FormControl(""),
    nombre_ciudad: new FormControl(""),
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

  columns = [{ prop: "id_ciudad" }, { name: "Codigo" }];
  columnsSort = [{ prop: "id_ciudad" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("myTable") tableExp: any;

  //MODAL
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private enterpriseApi: EnterpriseService
  ) {
    this.enterpriseApi.getCities().then((res) => {
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
    this.enterpriseApi.getCities().then((res) => {
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
      id_ciudad: new FormControl(""),
      nombre_ciudad: new FormControl(""),
      estado: new FormControl(true),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.warn(this.profileForm.value);
    this.enterpriseApi
      .postCities(this.profileForm.value)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  onSubmitUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.log("[UPDATE] :", this.profileForm.value);
    this.enterpriseApi
      .putCities(this.profileForm.value)
      .then((res) => {
        this.refresh();
        console.log("[Actualizado]: ", res);
      })
      .catch((err) => console.error(err));
  }

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalEdit(template: TemplateRef<any>, data) {
    this.modalRef = this.modalService.show(template);
    console.log(data);
    //
    this.profileForm = new FormGroup({
      id_ciudad: new FormControl(data.id_ciudad),
      nombre_ciudad: new FormControl(data.nombre_ciudad),
      estado: new FormControl(data.estado),
    });
  }

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
    this.enterpriseApi.getCities().then((res: any) => {
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.id_ciudad.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updateFilterNombre(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.nombre_ciudad.toLowerCase().indexOf(val) !== -1 || !val;
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
