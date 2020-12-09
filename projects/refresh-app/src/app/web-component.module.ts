import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RefreshLibComponent, RefreshLibModule } from '@refresh-lib/public-api';

@NgModule({
    imports: [ 
        BrowserModule,
        RefreshLibModule 
    ],
    exports: [],
    declarations: [],
    providers: [],
    entryComponents: [ RefreshLibComponent ]
})
export class WebComponentModule {
    constructor(private injector: Injector) {
    }
    
    ngDoBootstrap() {
        const externalTileCE = createCustomElement(RefreshLibComponent, { injector: this.injector });
        customElements.define('refresh-component', externalTileCE);
    }
}
