import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-cargamasivadedispositivos',
  templateUrl: './cargamasivadedispositivos.component.html',
  styleUrls: ['./cargamasivadedispositivos.component.scss']
})
export class CargamasivadedispositivosComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

  constructor() { }

  ngOnInit() {
  }

}
