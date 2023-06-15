import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroesModules } from './heroes/heroes.module';
import { ProductoComponent } from './sergio/producto/producto.component';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModules,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
