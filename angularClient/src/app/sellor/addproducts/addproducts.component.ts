import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpHeaders} from "@angular/common/http";
import swal from 'sweetalert';
import {environment} from '../../../environments/environment'
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }
  imgUrl = '../../assets/images/blankImg.jpg';
  name = '' ;
  description = '';
  errorString ='';
  price = '';
  flag = 0 ;
  category = '';
  selectedSelect = 'Select Category';
  sub_category = '';
  subCatDisplay = false;
  selectedFile: File = null;
  electronicsSubcat = [ 'Phone', 'Music Accessories' , 'Home Appliances' , 'Laptops' ] ;
  fashionSubcat = [ 'Wedding' , 'Jewellery' , 'Party' , 'Sports'];
  booksSubcat = [ 'Mystery', 'Autobiography' , 'Love' , 'Science' ] ;
  watchesSubcat = [ 'Branded' , 'Formal' , 'Sporty' , 'Casual' ];
  subCatoption1: String ='';
  subCatoption2: String = '';
  subCatoption3: String = '';
  subCatoption4: String = '';
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

  postDataChecker()
  {
    this.flag =0;
    this.errorString =''
    if(this.name.length <=0 )
    {
      this.flag++;
      this.errorString = this.errorString + 'Name missing !! \t \t \t \t \t \t';
    }
    if (this.category.length <=0)
    {
      this.flag++;
      this.errorString = this.errorString + 'Category missing !! \n';
    }
    if (this.sub_category.length <=0)
    {
      this.flag++;
      this.errorString = this.errorString + 'Sub Category missing !! \t \t \t \t \t \t ';
    }
    if (this.price.length <=0)
    {
      this.flag++;
      this.errorString = this.errorString + 'Price missing !! \n';
    }
    if (this.description.length <=0)
    {
      this.flag++;
      this.errorString = this.errorString + 'Description missing !! \t \t \t \t \t \t';
    }

    if(this.selectedFile == null)
    {
      this.flag++;
      this.errorString = this.errorString + 'Img Missing !! \n';

    }

    if(this.flag > 0)
    {
      console.log(this.flag)
      swal('INCOMPLETE FORM!' , this.errorString, 'warning');

    }

    else
      {
      this.postData();
    }
  }
  postData() {
    var userTokenObj= localStorage.getItem('userTokenObj')
    userTokenObj = JSON.parse(userTokenObj);
    var headerUploadData = new HttpHeaders({['x-access-token']: userTokenObj['token']});
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
    this.http.post(`${environment.domain}${environment.port}/api/uploadData`, fd , {headers: headerUploadData}).subscribe(
      (success) => {

swal('Added Succesfully', 'Added to your database', 'success');


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
