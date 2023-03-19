import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestAPI } from '../modal/Request-API.interface';
import { RequestAPIService } from '../service/request-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  response!: RequestAPI[];
  image: any;
  constructor(private _RequestAPI: RequestAPIService,
    private router: Router) { }
  ngOnInit(): void {
    this._RequestAPI.getRequestAPI().subscribe((data: RequestAPI[]) => this.response = data)
  }
  getImage(imageURL: string) {
    this._RequestAPI.getImageFromApi(imageURL).subscribe(img => this.image = img);
  }
  navigateToCharacter(id: any, data: RequestAPI) {
    sessionStorage.setItem("data", JSON.stringify(data));

    this.router.navigate(['/character', data.id])

  }

}
