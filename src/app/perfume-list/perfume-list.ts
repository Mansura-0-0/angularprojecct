import { Component, OnInit } from '@angular/core';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-perfume-list',
  standalone: true,
  templateUrl: './perfume-list.html',
  styleUrls: ['./perfume-list.css']
})
export class PerfumeList implements OnInit {

  perfumes: any[] = [];

  constructor(private perfumeService: PerfumeService) {}

  ngOnInit() {
    this.perfumeService.getPerfumes().subscribe(data => {
      this.perfumes = data;
    });
  }
}