import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { CardsService } from './cards.service';

import { AppComponent } from './app.component';

// import { 
//     CardComponent, 
//     CardActionComponent, 
//     CardFavComponent, 
//     CardShareCollectionComponent, 
//     CardShareComponent 
// } from '../card/index'; // local 
import { 
  CardComponent, 
  CardActionComponent, 
  CardFavComponent, 
  CardShareCollectionComponent, 
  CardShareComponent 
} from 'angular4-card'; // npm

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardActionComponent,
    CardFavComponent,
    CardShareCollectionComponent,
    CardShareComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
