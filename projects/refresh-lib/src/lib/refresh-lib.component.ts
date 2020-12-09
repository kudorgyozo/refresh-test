import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from './stuff';

@Component({
    selector: 'lib-refresh-lib',
    templateUrl: './refresh-lib.component.html'
})
export class RefreshLibComponent implements OnInit {

    counter = 0;
    someData : any = { a: 1, b: 2 };

    constructor(private http: HttpClient) {

    }


    async ngOnInit(): Promise<any> {
        await delay(1000);
        this.counter = 1;
        const result = await this.http.get('assets/value.json').toPromise();
        this.someData = result;
    }

}

