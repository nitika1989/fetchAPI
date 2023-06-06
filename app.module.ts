import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PreviewPhotoComponent } from './preview-photo/preview-photo.component'
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule } from '@angular/forms'


import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    PreviewPhotoComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
   
    
    NgxMatSelectSearchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
