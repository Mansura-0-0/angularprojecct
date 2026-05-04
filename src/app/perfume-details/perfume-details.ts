import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//I learn about ChangeDetectorRef while troubleshooting an issue where  data was loading in the console but not updating in the UI. I referred to Angular documentation and online resources to understand how to manually trigger the change detection.
//https://angular.io/api/core/ChangeDetectorRef
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
  errorMessage = '';

  reviewRating = 0;
  reviewComment = '';
  hasReviewed = false;

  editingReviewId = '';
  editReviewRating = 0;
  editReviewComment = '';

  currentPerfumeId = '';

  constructor(
    private route: ActivatedRoute,
    private perfumeService: PerfumeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('ID FROM URL:', id);

      if (id) {
        this.currentPerfumeId = id;
        this.loadPerfume(id);
      }
    });
  }

  loadPerfume(id: string) {
    this.hasReviewed = localStorage.getItem(`reviewed-${id}`) === 'true';

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

  setReviewRating(rating: number) {
    this.reviewRating = rating;
  }

  submitReview() {
    const id = this.currentPerfumeId;

    if (!id) return;

    if (this.hasReviewed) {
      alert('You have already reviewed this perfume.');
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

        localStorage.setItem(`reviewed-${id}`, 'true');
        this.hasReviewed = true;

        this.reviewRating = 0;
        this.reviewComment = '';

        this.loadPerfume(id);
      },
      error: (error) => {
        console.error('Error adding review:', error);
        alert('Could not add review.');
      }
    });
  }

  startEditReview(review: any) {
    this.editingReviewId = review._id;
    this.editReviewRating = review.rating;
    this.editReviewComment = review.comment;
  }

  saveEditedReview() {
    const perfumeId = this.currentPerfumeId;

    if (!perfumeId || !this.editingReviewId) return;

    const updatedReview = {
      rating: this.editReviewRating,
      comment: this.editReviewComment
    };

    this.perfumeService.updateReview(perfumeId, this.editingReviewId, updatedReview).subscribe({
      next: () => {
        alert('Review updated successfully');
        this.cancelEdit();
        this.loadPerfume(perfumeId);
      },
      error: (error) => {
        console.error('Error updating review:', error);
        alert('Could not update review.');
      }
    });
  }

  cancelEdit() {
    this.editingReviewId = '';
    this.editReviewRating = 0;
    this.editReviewComment = '';
  }
}