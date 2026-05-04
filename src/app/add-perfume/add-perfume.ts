import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PerfumeService } from '../PerfumeService';
import { Perfume } from '../perfume';

@Component({
  selector: 'app-add-perfume',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-perfume.html',
  styleUrl: './add-perfume.css'
})
export class AddPerfume {

  perfume: Perfume = {
    name: '',
    brand: '',
    description: '',
    scentType: '',
    price: 0,
    rating: 0,
    image: '',
    gender: ''
  };

  constructor(private perfumeService: PerfumeService) {}

  setRating(rating: number) {
    this.perfume.rating = rating;
  }

  addPerfume() {
  if (
    this.perfume.name.trim() === '' ||
    this.perfume.brand.trim() === '' ||
    this.perfume.scentType.trim() === '' ||
    this.perfume.price <= 0 ||
    this.perfume.description.trim() === '' ||
    this.perfume.image.trim() === '' ||
    this.perfume.gender.trim() === '' ||
    this.perfume.rating === 0
  ) {
    alert('Please fill in all fields before adding a perfume.');
    return;
  }

  this.perfumeService.addPerfume(this.perfume).subscribe(() => {
    alert('Perfume added successfully');

    this.perfume = {
      name: '',
      brand: '',
      description: '',
      scentType: '',
      price: 0,
      rating: 0,
      image: '',
      gender: ''
    };
  });
}}