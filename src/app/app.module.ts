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
  MatExpansionModule
} from '@angular/material';
import { ResumeComponent } from './resume/resume.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatPhoneNumberPipe } from './shared/format-phone-number.pipe';
import { WorkHistoryComponent } from './resume/work-history/work-history.component';
import { EducationHistoryComponent } from './resume/education-history/education-history.component';

const materialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResumeComponent,
    FormatPhoneNumberPipe,
    WorkHistoryComponent,
    EducationHistoryComponent
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
