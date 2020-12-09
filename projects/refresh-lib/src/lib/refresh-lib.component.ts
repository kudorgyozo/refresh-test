import { HttpClient } from '@angular/common/http';
import { Component, Input, NgZone, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { delay } from './stuff';

@Component({
    selector: 'refresh-component',
    templateUrl: './refresh-lib.component.html',
    encapsulation: ViewEncapsulation.ShadowDom
})
export class RefreshLibComponent implements OnInit, OnChanges {

    asyncCalls = 0;
    @Input() counter = 0;

    state = 0;

    constructor(private http: HttpClient) { }

    async ngOnChanges(changes: SimpleChanges): Promise<any> {
        console.log(`onchanges is in zone: ${NgZone.isInAngularZone()}`);
        this.state++;
        await this.doAsyncCall();
    }

    async ngOnInit(): Promise<any> {
    }

    async doAsyncCall(): Promise<any> {
        await delay(500);
        this.asyncCalls++;
        await this.http.get('assets/value.json').toPromise();
    }

}

