import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ErrorHandler, NgModule } from '@angular/core';
import { routes } from './app.routes';
import { ErrorHandlerService } from './service/error/error-handler.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppComponent],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        disableClose: true,
        hasBackdrop: true,
      },
    },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [],
})
export class AppModule {}
