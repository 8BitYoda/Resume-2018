import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule
} from '@angular/material';
import { ResumeComponent } from './resume/resume.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatPhoneNumberPipe } from './shared/format-phone-number.pipe';
import { HistoryDetailComponent } from './resume/history-detail/history-detail.component';
import { TechnologiesComponent } from './resume/history-detail/technologies/technologies.component';

const materialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResumeComponent,
    FormatPhoneNumberPipe,
    HistoryDetailComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ...materialComponents,
    HttpClientModule
  ],
  exports: [
    ...materialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
