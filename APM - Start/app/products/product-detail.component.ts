import { Component } from '@angular/core';
import { IProduct } from './products';
@Component({
    moduleId: module.id,
    selector: 'prodict-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle : string = "PageDetailTitles";
    product: IProduct;

    
}