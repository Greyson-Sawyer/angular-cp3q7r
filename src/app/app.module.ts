import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//
// DIRECTIVES
import { ParallaxDirective } from './directives/parallax.directive';

//
// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { ClientLayoutComponent } from './components/client/client-layout/client-layout.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ParallaxDirective,
    HeaderComponent,
    PageComponent,
    ClientLayoutComponent,
    DefaultPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
