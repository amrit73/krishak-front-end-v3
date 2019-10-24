import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadStatus:boolean;
  imageUrl: string;
  fileToUpload: File = null;
  base_url = 'http://localhost:90/';
  
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    // $('#img').fadeIn(200);
    this.uploadImageToServer($('#product-image'));
  }

  uploadImageToServer(imageUploadSelector) {
    console.log(imageUploadSelector);

    const formData = new FormData();
    const files = imageUploadSelector.get(0).files;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    const fileDetails = imageUploadSelector[0].files[0];
    const fileSize = fileDetails.size;

    if (fileSize > 10000000) {
      setTimeout(function () {
        alert('Image size exceeds');
        this.uploadStatus=false;
      }, 2000);
    } else {

      $.ajax({
        type: 'POST',
        url: this.base_url + 'upload',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data);
          $('#image-name').val(data);
        this.uploadStatus=true;

        },
        error() {
          alert('Upload failed');
        this.uploadStatus=false;

        }
      });
    }
  }

  onSubmitProduct(productname:any,
    category:any,
    pricePerUnit:any,
    description:any,
    discount:any,
    availableLocation:any,
    manufacturedLocation:any,
    quantity:any,
    expiredata:any,
    uploadedBy:any,
    imagename:any){
    // let data=$('#aaa').val();
    // alert(data);
    // alert(category.value)

    let data= {
      productName:productname.value,
      productCategory:category.value,
      pricePerUnit:pricePerUnit.value,
      description:description.value,
      image:imagename.value,
      discount:discount.value,
      availableLocation:availableLocation.value,
      manufacturedLocation:manufacturedLocation.value,
      quantity:quantity.value,
      productExpireData:expiredata.value,
      uploadedBy:uploadedBy.value      
    }

    console.log(data)

    if (!this.uploadStatus) {
      alert('Please try again!');
    }
    else{
      $.ajax({
        type: 'POST',
        url: this.base_url + 'addmyproduct',
        data:data,
        success: function () {
          alert('Success')
        },
        error: function () {
          alert('error')
        }
      });
    }

  }

}