import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectManager } from './ProjectManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  ProjectManagerObject!: ProjectManager;

  constructor(private httpClient : HttpClient)
  { }

  ngOnInit(): void {
  }

  formSubmitEvent()
  {
    this.ProjectManagerObject = new ProjectManager(this.username,this.password);
    console.log(this.username+" "+this.password);
    const credentials = JSON.stringify(this.ProjectManagerObject);
    this.httpClient.post("http://localhost:4200/api/authorize",JSON.stringify(credentials),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });
  }
}
