import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfumeService } from '../PerfumeService';

@Component({
  selector: 'app-perfume-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfume-details.html',
  styleUrl: './perfume-details.css'
})
export class PerfumeDetails implements OnInit {

  perfume: any = null;
  errorMessage: string = '';

  reviewRating: number = 0;
  reviewComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private perfumeService: PerfumeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadPerfume();
  }

  loadPerfume() {
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

  setReviewRating(rating: number) {
    this.reviewRating = rating;
  }

  submitReview() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    if (this.reviewRating === 0 || this.reviewComment.trim() === '') {
      alert('Please select a rating and write a comment.');
      return;
    }

    const review = {
      rating: this.reviewRating,
      comment: this.reviewComment
    };

    this.perfumeService.addReview(id, review).subscribe({
      next: () => {
        alert('Review added successfully');

        this.reviewRating = 0;
        this.reviewComment = '';

        this.loadPerfume();
      },
      error: (error) => {
        console.error('Error adding review:', error);
        alert('Could not add review.');
      }
    });
  }
}
 
