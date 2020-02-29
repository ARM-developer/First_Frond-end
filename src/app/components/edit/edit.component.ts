import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/project.service";
import { UploadService } from "../../service/upload.service";
import { Global } from "../../service/global";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { error } from 'protractor';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public fileToUpload : Array<File>;
  public save_project;
  public url: string;

  constructor(
    private _projectService : ProjectService,
    private _uploadService : UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.title = 'Editar projecto';
  }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      let id = params.id;
      this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){

          //subir la imagen
          if(this.fileToUpload){
            this._uploadService.makeFileRequeste(Global.url+ "upload-image/" + response.project._id, [], this.fileToUpload, 'image').then((result:any) =>{
              this.status = 'success';
              this.save_project = result.project;
            });
          }else{
            this.status = 'success';
              this.save_project = response.project;
          }
          
        }else{
          this.status = 'failed';
        }  
      },
      error => {
        console.log(<any>error);        
      }
    );  
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }
}
