import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/project.service";
import { UploadService } from "../../service/upload.service";
import { Global } from "../../service/global";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public fileToUpload : Array<File>;
  public save_project;
  public url;

  constructor(
    private _projectService : ProjectService,
    private _uploadService : UploadService
  ) {
    this.title = 'Crear projecto';
    this.project = new Project('','','','',2020,'', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    //subir los datos
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){

          //subir la imagen
          if(this.fileToUpload){
            this._uploadService.makeFileRequeste(Global.url+ "upload-image/" + response.project._id, [], this.fileToUpload, 'image').then((result:any) =>{
              this.status = 'success';
              
              this.save_project = result.project;
  
              form.reset();
            });
          }else{
            this.status = 'success';
              
              this.save_project = response.project;
  
              form.reset();
          }
          
        }else{
          this.status = 'failed';
        }       
      },
      error =>{
        console.log(<any>error);        
      }
    );
    
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }

}
