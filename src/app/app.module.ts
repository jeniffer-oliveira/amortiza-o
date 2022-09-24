import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AmortizacaoComponent } from './components/amortizacao/amortizacao.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AmortizacaoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
