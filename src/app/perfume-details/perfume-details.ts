import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-perfume-details',
  templateUrl: './perfume-details.html'
})
export class PerfumeDetails implements OnInit {
  perfume: any = {};

  constructor(
    private route: ActivatedRoute,
    private perfumeService: PerfumeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
   
      this.perfumeService.getPerfume(id!).subscribe((data) => {
        this.perfume = data;
      });
    }
  }
}
