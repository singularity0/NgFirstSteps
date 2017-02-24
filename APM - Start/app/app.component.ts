import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>
        {{framework}}{{action}}.
        <br>
        My app number {{number}}:)</h1>
    `
})
export class AppComponent implements OnInit {
    framework : string = "Angular2:";
    action: string = "Getting Started";
    number: number=0;

    ngOnInit(){
        this.number = 1;
    }

 }
