import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContainerComponent } from './layout/container/container.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SerachPipe } from './pipes/serach.pipe';
import { SerachIdPipe } from './pipes/serach-id.pipe';
import { DashboardComponent } from './layout/container/dashboard/dashboard.component';
import { DetailComponent } from './layout/container/detail/detail.component';
import { AjoutComponent } from './layout/container/ajout/ajout.component';
import { ContactComponent } from './layout/container/contact/contact.component';
import { PocComponent } from './layout/container/poc/poc.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component'
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    FooterComponent,
    SerachPipe,
    SerachIdPipe,
    DashboardComponent,
    DetailComponent,
    AjoutComponent,
    ContactComponent,
    PocComponent,
    InscriptionComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
