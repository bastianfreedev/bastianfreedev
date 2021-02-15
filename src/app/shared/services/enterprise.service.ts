import { Injectable } from "@angular/core";
import { User } from "firebase";
import { reject } from "lodash";
import { Observable } from "rxjs/Observable";
import { resolve } from "url";
import { isNullOrUndefined } from "util";
import { Enterprise, UserLogin } from "../interfaces/enterprise";
const axios = require("axios");

const url = "http://192.168.1.90/v1";
const _ = require("lodash");

@Injectable({
  providedIn: "root",
})
export class EnterpriseService {
  loginuser(usr_username: string, usr_password: string) {
    throw new Error("Method not implemented.");
  }
  // // private enterpriseDoc: AngularFirestoreDocument<Enterprise>;
  // private enterprisesCollection: AngularFirestoreCollection<Enterprise>;
  // enterprise: Observable<Enterprise>;
  // enterprises: Observable<Enterprise[]>;

  constructor() {
    // this.enterprisesCollection = firestore.collection<Enterprise>("empresa");
    // this.enterprises = this.enterprisesCollection.valueChanges();
  }

  // public getEnterprises() {
  // return this.firestore.collection<Enterprise>("empresa").valueChanges();
  // // }

  getEnterprises() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Empresas")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postEnterprises(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Empresas", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putEnterprises(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Empresas", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getDepartments() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Deptos")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postDepartments(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Deptos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putDepartments(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Deptos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getEmployees() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Empleados")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postEmployees(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Empleados", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putEmployees(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Empleados", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getCencos() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Cencos")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postCencos(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Cencos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putCencos(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Cencos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getCommunes() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Comunas")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postCommunes(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Comunas", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putCommunes(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Comunas", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getRegions() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Regiones")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postRegions(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Regiones", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putRegions(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Regiones", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getCities() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Ciudades")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postCities(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Ciudades", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putCities(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Ciudades", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getDevices() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Dispositivos")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postDevices(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Dispositivos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putDevices(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Dispositivos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getShifts() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Turnos")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postShifts(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Turnos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putShifts(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Turnos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getCards() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Tarjetas")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postCards(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Tarjetas", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putCards(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Tarjetas", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getSectors() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Sectores")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postSectors(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Sectores", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putSectors(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Sectores", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getCharges() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/Cargos")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postCharges(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/Cargos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putCharges(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/Cargos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/UsuarioAccesos")
        .then(function (response) {
          console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        })
        .then(function () {
          // always executed
        });
    });
  }

  postUsers(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + "/UsuarioAccesos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  putUsers(dataInsert) {
    return new Promise((resolve, reject) => {
      axios
        .put(url + "/UsuarioAccesos", dataInsert)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  postUserLogin(usr_username: string, usr_password: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(url + "/UsuarioAccesos", {
          usr_username: "admin",
          usr_password: "admin",
          estado_id: 1,
          usr_nombres: "Juan",
          usr_ape_paterno: "Perez",
          usr_ape_materno: "Gonzalez",
          usr_perfil_id: 1,
          usr_email: "jperez@fumase.cl",
          usr_fecha_ultima_conexion: "2020-12-15",
          empresa_id: "em04",
          fecha_creacion: "2020-12-12",
        })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  setUser(user: UserLogin): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserLogin {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserLogin = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
}
