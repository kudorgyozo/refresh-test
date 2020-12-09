import { NgModule } from '@angular/core';
import { RefreshLibComponent } from './refresh-lib.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RefreshLibComponent],
  imports: [
      HttpClientModule,
      CommonModule
  ],
  exports: [RefreshLibComponent]
})
export class RefreshLibModule { }