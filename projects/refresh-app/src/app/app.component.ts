import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'refresh-app';
 
    counter = 0;
    
    increment() {

        this.counter++;

    }
}
