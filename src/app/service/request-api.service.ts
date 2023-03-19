import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LocationAndOrigin, RequestAPI } from '../modal/Request-API.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestAPIService {

  constructor(private http: HttpClient) { }

  getRequestAPI(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character").pipe(map(
      
        (item: any) => { return this.getMappedRequest(item.results);  }

    )
    );
  }


  getImageFromApi(image : string): Observable<Blob>{
    return this.http.get('image', {responseType: "blob"});
  }
  getMappedRequest(results: any) : RequestAPI[]{
    let resul: RequestAPI[]=[];
   // console.log(results.length)
    for (let i in results) {
      const result: RequestAPI = {
        id: results[i].id,
        name: results[i].name,
        status: results[i].status,
        species: results[i].species,
        type: results[i].type,
        gender: results[i].gender,
        origin: this.getLocationAndOrigin(results[i].origin),
        location: this.getLocationAndOrigin(results[i].location),
        image: results[i].image,
        episode: results[i].episode,
        url: results[i].url,
        created: results[i].created
      }
      console.log(result)
      resul.push(result);
    }
  
    return resul;
  }
  getLocationAndOrigin(locationOrOrigin: LocationAndOrigin): any {
   // console.log(locationOrOrigin)
    const locationOrigin: LocationAndOrigin = {
    
      name: locationOrOrigin.name,
      url: locationOrOrigin.url
    }
    return locationOrigin;
  }
}
