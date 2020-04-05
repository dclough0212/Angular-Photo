import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, catchError } from 'rxjs/Operators';


export interface PhotoResponse {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
};


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<PhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 1PZG_rKb5K7Vzy3N4BL-3E1FURYb44AZFhVoHssUAgs'
      }
    }).pipe(
      pluck('urls')
    )
  }
}
