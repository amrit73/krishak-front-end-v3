import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  uid:String


  constructor() { }

  ngOnInit() {
    this.uid=localStorage.getItem("uid");
  }

  uploadStatus: boolean;
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
        this.uploadStatus = false;
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
          $('#image-name').val(data.Filename);
          this.uploadStatus = true;

        },
        error() {
          alert('Upload failed');
          this.uploadStatus = false;

        }
      });
    }
  }

  onSubmitProduct() {
    // let data=$('#aaa').val();
    // alert(data);
    // alert(category.value)

    let data= {
      productName:$('#productnamee').val(),
      productCategory:$('#productcategory').val(),
      pricePerUnit:$('#productunit').val(),
      description:$('#productdescription').val(),
      image:$('#image-name').val(),
      discount:$('#productdiscount').val(),
      availableLocation:$('#productlocation').val(),
      manufacturedLocation:$('#product-manufactured-location').val(),
      quantity:$('#productquantity').val(),
      productExpireData:$('#product-expire-data').val(),
      uploadedBy:this.uid      
    }


    console.log(data)

    if ($('#image-name').val()==='') {
      alert('Please try again!');
    }
    else {
      $.ajax({
        type: 'POST',
        url: this.base_url + 'addmyproduct',
        data: data,
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
