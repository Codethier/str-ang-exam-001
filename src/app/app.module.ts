import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponentComponent,
    HeroesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
