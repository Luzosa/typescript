import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormerComponent } from './former/former.component';
import { KvadratComponent } from './kvadrat/kvadrat.component';
import { RektangelComponent } from './rektangel/rektangel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormerComponent,
    KvadratComponent,
    RektangelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
