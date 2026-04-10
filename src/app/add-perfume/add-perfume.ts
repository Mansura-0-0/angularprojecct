import { Component } from '@angular/core';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-add-perfume',
 
  templateUrl: './add-perfume.html',
 

})
export class AddPerfume {
  perfume={
    name:'',
    brand:'',
    price:0,
    description:'',
    scent:'',
    rating:1
  };

  constructor(private perfumeService: PerfumeService) {}
  submit() {
    this.perfumeService.addPerfume(this.perfume).subscribe(() => {
      alert('Perfume added successfully!');
      this.perfume = {
        name: '',
        brand: '',
        price: 0,
        description: '',
        scent: '',
        rating: 1
      };
    });
  }
  
}
