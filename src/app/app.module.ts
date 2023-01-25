import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TryHttpComponent } from './try-http/try-http.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    TryHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
