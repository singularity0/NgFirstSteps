import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    providers: [ProductService]
})
export class AppComponent implements OnInit {
    framework : string = "Angular2:";
    action: string = "Getting Started";
    number: number=0;

    ngOnInit(){
        this.number = 1;
    }

 }
