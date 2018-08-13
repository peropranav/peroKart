import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }
  imgUrl = '../../assets/images/blankImg.jpg';
  name: string ;
  description: string;
  price: string;
  category: string;
  selectedSelect = 'Select Category';
  sub_category: string;
  subCatDisplay = false;
  selectedFile: File = null;
  electronicsSubcat = [ 'Phone', 'Music Accessories' , 'Home Appliances' , 'Laptops' ] ;
  fashionSubcat = [ 'Wedding' , 'Jewellery' , 'Party' , 'Sports'];
  booksSubcat = [ 'Mystery', 'Autobiography' , 'Love' , 'Science' ] ;
  watchesSubcat = [ 'Branded' , 'Formal' , 'Sporty' , 'Casual' ];
  subCatoption1: String;
  subCatoption2: String;
  subCatoption3: String;
  subCatoption4: String;
  onFileSelectedListener(file: FileList) {
    this.selectedFile = file.item(0);
    console.log(event);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
  sub_categorySelect(event) {
    console.log(event.target.value);
    this.sub_category = event.target.value;
  }
  categorySelect(event) {

    this.category = event.target.value;
    console.log(event.target.value);
    this.subCatDisplay = true;

    if ( event.target.value === 'electronics') {
      console.log('hello');
      this.subCatoption1 = this.electronicsSubcat[0];
      this.subCatoption2 = this.electronicsSubcat[1];
      this.subCatoption3 = this.electronicsSubcat[2];
      this.subCatoption4 = this.electronicsSubcat[3];

    }
    if ( event.target.value === 'fashion') {
      this.subCatoption1 = this.fashionSubcat[0];
      this.subCatoption2 = this.fashionSubcat[1];
      this.subCatoption3 = this.fashionSubcat[2];
      this.subCatoption4 = this.fashionSubcat[3];
    }
    if ( event.target.value === 'books') {
      this.subCatoption1 = this.booksSubcat[0];
      this.subCatoption2 = this.booksSubcat[1];
      this.subCatoption3 = this.booksSubcat[2];
      this.subCatoption4 = this.booksSubcat[3];
    }
    if ( event.target.value === 'watches') {
      this.subCatoption1 = this.watchesSubcat[0];
      this.subCatoption2 = this.watchesSubcat[1];
      this.subCatoption3 = this.watchesSubcat[2];
      this.subCatoption4 = this.watchesSubcat[3];
    }

  }
  postData() {

    var userTokenObj= localStorage.getItem('userTokenObj')
    userTokenObj = JSON.parse(userTokenObj);
    var headerUploadData = new HttpHeaders({['x-access-token']: userTokenObj['token']});

    this.spinner.show();
    console.log('hello client' , this.name);
    var fd = new FormData();
    fd.append('name' , this.name);
    fd.append('category', this.category);
    fd.append('sub_category', this.sub_category);
    fd.append('price',  this.price );
    fd.append('description', this.description);
    fd.append('avatar', this.selectedFile, this.selectedFile.name);
    console.log(fd);
    console.log('headers:', headerUploadData)
    this.http.post('http://localhost:3000/api/uploadData', fd , {headers: headerUploadData }).subscribe(
      (success) => {
        console.log('added succesfully');
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 2000);
        this.selectedFile = null;
        this.imgUrl = '../../assets/images/blankImg.jpg';
        this.name = '';
        this.category = '';
        this.price = '';
        this.description = '';
        this.sub_category = '';
        this.subCatDisplay = false;
        this.selectedSelect = 'Select Category';


      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
  ngOnInit() {
  }
}
