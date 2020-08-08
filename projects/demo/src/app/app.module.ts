import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgCooltipsModule } from 'projects/ng-cooltips/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgCooltipsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
