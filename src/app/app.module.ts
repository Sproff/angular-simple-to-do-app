import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { GetDataComponent } from './components/get-data/get-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateDataComponent,
    PostDataComponent,
    GetDataComponent,
    DeleteDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
