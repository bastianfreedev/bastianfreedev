import { Component, OnInit } from "@angular/core";
//import { SettingsService } from "../../../core/settings/settings.service";
//import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
//import { CustomValidators } from "ng2-validation";
import { EnterpriseService } from "../../../shared/services/enterprise.service";
import { UserLogin } from "../../../shared/interfaces/enterprise";
import { Router } from "@angular/router";
//import { isError } from "util";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private enterpriseApi: EnterpriseService,
    private router: Router
  ) {}

  private user: UserLogin = {
    usr_username: "admin",
    usr_password: "admin",
    estado_id: "1",
    usr_nombres: "Juan",
    usr_ape_paterno: "Perez",
    usr_ape_materno: "Gonzalez",
    usr_perfil_id: "1",
    usr_email: "jperez@fumase.cl",
    usr_fecha_ultima_conexion: "2020-12-15",
    empresa_id: "em04",
    fecha_creacion: "2020-12-12",
    ultima_actualizacion: "2020-12-23",
  };

  //public isError = false;

  ngOnInit() {}

  onLogin() {
    return this.enterpriseApi
      .postUserLogin(this.user.usr_username, this.user.usr_password)
      .then(
        (data) => {
          //console.log(data);
          this.enterpriseApi.setUser(this.user);
          let token = this.user;
          this.enterpriseApi.setToken(token);
          this.router.navigate(["/login/profile"]);
        },
        (error) => console.log(error)
      );
  }
}
