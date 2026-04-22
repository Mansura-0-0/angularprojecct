import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfume } from './perfume';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {
  private http = inject(HttpClient);
  private api = 'http://localhost:5050/perfume';

  getPerfumes() {
    return this.http.get<Perfume[]>(this.api);
  }

  getPerfume(id: string) {
    return this.http.get<Perfume>(`${this.api}/${id}`);
  }

  addPerfume(data: Perfume) {
    return this.http.post<Perfume>(this.api, data);
  }

  deletePerfume(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
  