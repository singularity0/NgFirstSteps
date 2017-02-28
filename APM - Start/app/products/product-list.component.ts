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
    errorMessage : string;

    constructor(private productService: ProductService){

    }

    toggleImage():void {
        this.imageShown = !this.imageShown;
    }

    ngOnInit(): void {
        console.log('On init');
        this.productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);

    }

    onNotify(message : string){
        this.pageTitle = 'Prod List' + message;
    }


}