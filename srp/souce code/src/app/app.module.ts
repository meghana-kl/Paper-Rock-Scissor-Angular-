import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { MainComComponent } from './main-com/main-com.component';
import { Rou1Component } from './rou1/rou1.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Footer1Component,
    MainComComponent,
    Rou1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
