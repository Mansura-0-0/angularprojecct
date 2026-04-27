import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PerfumeService } from '../PerfumeService';

@Component({
  selector: 'app-perfume-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfume-details.html',
  styleUrl: './perfume-details.css'
})
export class PerfumeDetails implements OnInit {

  perfume: any = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private perfumeService: PerfumeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID from URL:', id);

    if (id) {
      this.perfumeService.getPerfume(id).subscribe({
        next: (data: any) => {
          console.log('Perfume details:', data);
          this.perfume = data;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error loading perfume:', error);
          this.errorMessage = 'Could not load perfume details.';
          this.cdr.detectChanges();
        }
      });
    }
  }
}