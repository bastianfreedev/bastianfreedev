import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-cargamasivaderfid',
  templateUrl: './cargamasivaderfid.component.html',
  styleUrls: ['./cargamasivaderfid.component.scss']
})
export class CargamasivaderfidComponent implements OnInit {

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
