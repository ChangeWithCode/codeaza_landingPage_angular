import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { MainBannerComponent } from './components/main-banner/main-banner.component'
import { OurWorkComponent } from './components/our-work/our-work.component'
import { ServicesComponent } from './components/services/services.component'
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ReviewsComponent } from './components/reviews/reviews.component'
import { OurTeamComponent } from './components/our-team/our-team.component'
import { ContactusComponent } from './components/contact-us/contactus.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBannerComponent,
    OurWorkComponent,
    ServicesComponent,
    WhatWeDoComponent,
    PortfolioComponent,
    ReviewsComponent,
    OurTeamComponent,
    ContactusComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
