import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfume } from './perfume';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  private apiUrl = 'http://34.246.174.124:5050/perfume';

  constructor(private http: HttpClient) {}

  getPerfumes(): Observable<Perfume[]> {
    return this.http.get<Perfume[]>(this.apiUrl);
  }

  getAllPerfumes(): Observable<Perfume[]> {
    return this.http.get<Perfume[]>(this.apiUrl);
  }

  getPerfume(id: string): Observable<Perfume> {
    return this.http.get<Perfume>(`${this.apiUrl}/${id}`);
  }

  addPerfume(perfume: Perfume): Observable<any> {
    return this.http.post(this.apiUrl, perfume);
  }

  deletePerfume(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addReview(id: string, review: { rating: number; comment: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/review/${id}`, review);
  }

  updateReview(
    perfumeId: string,
    reviewId: string,
    review: { rating: number; comment: string }
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/review/${perfumeId}/${reviewId}`, review);
  }
}