import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  private apiUrl = 'http://localhost:5050/perfume';

  constructor(private http: HttpClient) {}

  getPerfumes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}