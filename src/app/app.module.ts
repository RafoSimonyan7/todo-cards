import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddCardButtonComponent } from './add-card-button/add-card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    AddCardButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
