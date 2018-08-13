import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  viewAllCardArray = [];

  constructor(private httpClient: HttpClient) {

  }

  electronicsData = [];
  fashionData = [];
  watchesData = [];
  booksData = [];


  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/mainPageData').subscribe((data) => {
      console.log(data);
      this.viewAllCardArray = Object.keys(data).map(function (key) {
        return data[key];
      });
      this.electronicsData = this.viewAllCardArray.slice(0, 4);
      this.fashionData = this.viewAllCardArray.slice(4, 8);
      this.watchesData = this.viewAllCardArray.slice(8, 12);
      this.booksData = this.viewAllCardArray.slice(12, 16);
    });
  }
}

