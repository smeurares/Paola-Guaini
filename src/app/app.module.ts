import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MastheadComponent } from './masthead/masthead.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    
    MastheadComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
