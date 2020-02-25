import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../service/project.service";
import { Global } from "../../service/global";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  public projects : Project[];

  constructor(
    private _projectService : ProjectService
  ){
  }

  ngOnInit(): void{
    this.getProject();
  }

  getProject(){
    this._projectService.getProject().subscribe(
      response =>{
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
