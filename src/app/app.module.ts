import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCardComponent } from './top-card/top-card.component';
import { AboutComponent } from './about/about.component';
import { StackComponent } from './stack/stack.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CreditsComponent } from './credits/credits.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopCardComponent,
    AboutComponent,
    StackComponent,
    FooterComponent,
    ContactComponent,
    CreditsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
