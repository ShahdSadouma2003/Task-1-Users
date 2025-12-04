import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));

// .....................................

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// });

// bootstrapApplication(AppComponent, appConfig)
//     .catch((err) => console.error(err));
