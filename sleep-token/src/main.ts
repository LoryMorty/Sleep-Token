import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';  // ✅ questo è corretto
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]
}).catch(err => console.error(err));