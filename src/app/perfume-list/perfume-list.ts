import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfumeService } from '../PerfumeService';
import { Perfume } from '../perfume';

@Component({
  selector: 'app-perfume-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './perfume-list.html',
  styleUrl: './perfume-list.css'
})
//to display the list of perfumes
export class PerfumeList implements OnInit {

  perfumes = signal<Perfume[]>([]);
  searchText = '';

  constructor(private perfumeService: PerfumeService) {}

  ngOnInit() {
    this.loadPerfumes();
  }
//to load perfumes from the service
  loadPerfumes() {
    this.perfumeService.getPerfumes().subscribe({
      next: (data: Perfume[]) => {
        this.perfumes.set(data);
      },
      error: (error) => {
        console.error('Error loading perfumes:', error);
      }
    });
  }
//to filter perfumes based on search text
//making it case sensitive and searching in name or brand and scent type
  filteredPerfumes() {
    return this.perfumes().filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.brand.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.scentType.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
//to delete a perfume
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