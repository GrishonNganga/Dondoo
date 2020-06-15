import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotesComponent,
    QuoteDescriptionComponent,
    HighlightDirective,
    DateCountPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
