import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-perfume-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfume-list.html'
})
export class PerfumeList implements OnInit {

  perfumes: any[] = [];

  constructor(private perfumeService: PerfumeService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.perfumeService.getPerfumes().subscribe((data: any[]) => {
      console.log(data);
      this.perfumes = data;
    });
  }

  deletePerfume(id: string) {
    this.perfumeService.deletePerfume(id).subscribe(() => {
      this.load();
    });
  }
}