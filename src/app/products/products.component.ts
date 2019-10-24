import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products;
  baseurl = this.BASE_URL.publishBaseUrl();
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private productService: ProductsService, private BASE_URL: ProductsService) {
  }

  displayedColumns: string[] = ['productName', 'productCategory', 'pricePerUnit', 'description','discount','quantity','availableLocation','manufacturedLocation','productExpireData','uploadedBy'];
  dataSource = new MatTableDataSource(this.products);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  ngOnInit() {
    return this.productService.getData().subscribe((data: any[])=>{
      this.dataSource=data[0].data;
    });


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
