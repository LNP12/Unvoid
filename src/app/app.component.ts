import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RequestAPI } from './modal/Request-API.interface';
import { RequestAPIService } from './service/request-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'unVoidTask';


}
