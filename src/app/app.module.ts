import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostComponent,
    CitiesComponent,
    CityComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
