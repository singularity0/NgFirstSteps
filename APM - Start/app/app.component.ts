import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
    framework : string = "Angular2:";
    action: string = "Getting Started";
    number: number=0;

    ngOnInit(){
        this.number = 1;
    }

 }
