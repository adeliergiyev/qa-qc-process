import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// TODO: refactor bootstrap (TODOs учитываются Sonar как code smell)
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
