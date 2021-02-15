import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { FormGroup, FormControl } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import Helpers from "../../../shared/utils/helpers";
import { EnterpriseService } from "../../../shared/services/enterprise.service";

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TarjetasComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  //profileForm colección de datos
  profileForm = new FormGroup({
    codigo_tarjeta: new FormControl(""),
    numero_tarjeta: new FormControl(""),
    fecha_ingreso: new FormControl(""),
    estado: new FormControl(true),
    id_usuario_ins: new FormControl(""),
    fecha_ins: new FormControl(""),
    id_usuario_upd: new FormControl(""),
    fecha_upd: new FormControl(Helpers.getDateTime()),
    run_empleado: new FormControl(""),
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

  columns = [{ prop: "codigo_tarjeta" }, { name: "Codigo" }];
  columnsSort = [{ prop: "codigo_tarjeta" }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("myTable") tableExp: any;

  //MODAL
  modalRef: BsModalRef;
  descripcionError: any;
  moduloApiError: any;

  constructor(
    private modalService: BsModalService,
    private enterpriseApi: EnterpriseService
  ) {
    this.enterpriseApi.getCards().then((res) => {
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
    this.enterpriseApi.getCards().then((res) => {
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
      codigo_tarjeta: new FormControl(""),
      numero_tarjeta: new FormControl(""),
      fecha_ingreso: new FormControl(""),
      estado: new FormControl(true),
      id_usuario_ins: new FormControl(""),
      fecha_ins: new FormControl(""),
      id_usuario_upd: new FormControl(""),
      fecha_upd: new FormControl(Helpers.getDateTime()),
      run_empleado: new FormControl(""),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.warn(this.profileForm.value);
    this.enterpriseApi
      .postCards(this.profileForm.value)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  onSubmitUpdate() {
    // TODO: Use EventEmitter with form value
    // TODO: llamar al servicio y pasarle como parametro el this.profileForm.value
    console.log("[UPDATE] :", this.profileForm.value);
    this.enterpriseApi
      .putCards(this.profileForm.value)
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
      codigo_tarjeta: new FormControl(data.codigo_tarjeta),
      numero_tarjeta: new FormControl(data.numero_tarjeta),
      fecha_ingreso: new FormControl(data.fecha_ingreso),
      estado: new FormControl(data.estado),
      id_usuario_ins: new FormControl(data.id_usuario_ins),
      fecha_ins: new FormControl(data.fecha_ins), //no modificable
      id_usuario_upd: new FormControl(data.id_usuario_upd), //modificable, se setea dependiendo del usuario que este conectado
      fecha_upd: new FormControl(Helpers.getDateTime()),
      run_empleado: new FormControl(data.run_empleado),
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
    this.enterpriseApi.getCards().then((res: any) => {
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
      return d.codigo_Tarjeta.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updateFilterNumero(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.numero_Tarjeta.toLowerCase().indexOf(val) !== -1 || !val;
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
  //Controlar error
  error(descrError, modError) {
    console.error("descripcion del error", descrError);
    this.descripcionError.push(descrError);

    console.error("error en api", modError);
    this.moduloApiError.push(modError);
  }
}
