import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UserService } from './services/user-service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LocalStorageService } from './services/local-storage-service';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { ErrorInterceptor } from './services/error-interceptor';
import { FirstConnectionComponent } from './first-connection/first-connection.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    HomeComponent,
    DefaultComponent,
    FirstConnectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
