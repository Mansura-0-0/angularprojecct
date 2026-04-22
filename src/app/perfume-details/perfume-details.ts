import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-perfume-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfume-details.html'
})
export class PerfumeDetails implements OnInit {

  perfume: any;

  constructor(
    private route: ActivatedRoute,
    private perfumeService: PerfumeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.perfumeService.getPerfume(id).subscribe((data: any) => {
          this.perfume = data;
        });
      }
    });
  }
}