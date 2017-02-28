import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.componenet.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "My list with my products. My my my";
    imageWidth: number = 50;
    imageMargin = 2;
    imageShown: boolean = false;
    listFilter: string = '';
    products: IProduct[];

    constructor(private productService: ProductService){

    }

    toggleImage():void {
        this.imageShown = !this.imageShown;
    }

    ngOnInit(): void {
        console.log('On init');
        this.products = this.productService.getProducts();
    }

    onNotify(message : string){
        this.pageTitle = 'Prod List' + message;
    }


}