import { Component, OnInit } from "@angular/core";
import { UserLogin } from "../../../shared/interfaces/enterprise";
import { EnterpriseService } from "../../../shared/services/enterprise.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private enterpriseApi: EnterpriseService) {}
  user: UserLogin;

  ngOnInit() {
    this.user = this.enterpriseApi.getCurrentUser();
    console.log(this.user);
  }
}
