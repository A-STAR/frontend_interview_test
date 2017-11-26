import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './http.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [BrowserAnimationsModule],
  providers: [HttpService]
})
export class CoreModule { }
