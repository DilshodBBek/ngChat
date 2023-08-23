import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SendComponent } from './send/send.component';
import { ResponseComponent } from './response/response.component';
import { FormsModule } from '@angular/forms';
import { DirectorComponent } from './director/director.component';
import { DeveloperComponent } from './developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    ResponseComponent,
    DirectorComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
