import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  students?: any[];
  currentStudent: any = {};
  currentIndex = -1;
  title = '';

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.retrievePokemanData();
  }

  retrievePokemanData(): void {
    this.commonService.getAll().subscribe({
      next: (data: any) => {
        this.students = data.results;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
