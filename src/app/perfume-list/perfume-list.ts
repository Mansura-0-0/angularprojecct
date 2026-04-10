import { Component, OnInit } from '@angular/core';
import { PerfumeService } from '../perfume';

@Component({
  selector: 'app-perfume-list',
  
  templateUrl: './perfume-list.html'
  
})
export class PerfumeList implements OnInit {

  perfumes: any[] = [];//this will hold the list of perfumes fetched from the server

  constructor(private perfumeService: PerfumeService) {}//injecting the PerfumeService to fetch data from the server

  ngOnInit() {this.load();}
  load() {
    this.perfumeService.getPerfumes().subscribe((data: any[]) => {
      this.perfumes = data;//assigning the fetched data to the perfumes array
    });
  
  }
  deletePerfume(id: string) {
    this.perfumeService.deletePerfume(id).subscribe(() => {
      this.load();//reload the list after deletion
    });
  }
}