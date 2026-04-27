import { Component, OnInit,inject,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfumeService } from '../PerfumeService';
import { Perfume } from '../perfume';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfume-list',
   
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './perfume-list.html'
  
})
export class PerfumeList implements OnInit {
  private perfumeService = inject(PerfumeService);

  perfumes = signal<Perfume[]>([]);
  apiError = signal(false);

  ngOnInit() {
    this.load();
  }

  load() {
    this.perfumeService.getPerfumes().subscribe({
      next: (data) => {
        this.perfumes.set(data);
        this.apiError.set(false);
      },
      error: () => {
        this.apiError.set(true);
      }
    });
  }

  deletePerfume(id: string) {
    this.perfumeService.deletePerfume(id).subscribe({
      next: () => this.load(),
      error: () => this.apiError.set(true)
    });
  }
}