import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UserService } from '../app/user-service';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
@NgModule({
  declarations: [AppComponent, MainComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: 'enabled',
    }),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
