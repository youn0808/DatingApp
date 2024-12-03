import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private url = 'https://localhost:5001/'
  constructor(private http:HttpClient) { }

}
