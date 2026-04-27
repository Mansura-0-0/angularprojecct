import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PerfumeService } from '../PerfumeService';
import { Perfume } from '../perfume';

@Component({
  selector: 'app-perfume-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perfume-list.html',
  styleUrl: './perfume-list.css'
})
export class PerfumeList implements OnInit {

  perfumes = signal<Perfume[]>([]);

  constructor(private perfumeService: PerfumeService) {}

  ngOnInit() {
    this.loadPerfumes();
  }

  loadPerfumes() {
    this.perfumeService.getPerfumes().subscribe({
      next: (data: Perfume[]) => {
        console.log('Perfumes loaded:', data);
        this.perfumes.set(data);
      },
      error: (error) => {
        console.error('Error loading perfumes:', error);
      }
    });
  }

  deletePerfume(id: string) {
    this.perfumeService.deletePerfume(id).subscribe({
      next: () => {
        this.loadPerfumes();
      },
      error: (error) => {
        console.error('Error deleting perfume:', error);
      }
    });
  }
}