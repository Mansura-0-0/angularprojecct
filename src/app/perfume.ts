import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  private api = 'http://localhost:5050/perfume';

  constructor(private http: HttpClient) {}

  getPerfumes() {
    return this.http.get<any[]>(this.api);
  }

  getPerfume(id: string) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  addPerfume(data: any) {
    return this.http.post(this.api, data);
  }

  deletePerfume(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
  detailsPerfume(id: string) {
    return this.http.get(`${this.api}/${id}`);
  }
  
}

  