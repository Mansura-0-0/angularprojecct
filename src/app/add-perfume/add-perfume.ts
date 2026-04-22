import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-add-perfume',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-perfume.html'
})
export class AddPerfume {

  perfume = {
    Id: '',
    name: '',
    brand: '',
    description: '',
    scentType: '',
    rating: 1,
    price:0,
    image:''
  };

  constructor(private perfumeService: PerfumeService) {}

  submit() {
    this.perfumeService.addPerfume(this.perfume).subscribe(() => {
      alert("Added!");
    });
  }
}