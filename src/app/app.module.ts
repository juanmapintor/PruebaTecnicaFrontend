import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';

import { UsersService } from './services/users.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsComponent,
    UserInfoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
