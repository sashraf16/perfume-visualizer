import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { vizReducer } from './app/visualizer/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { vizEffects } from './app/visualizer/store/effects';

bootstrapApplication(AppComponent,{
  providers: [
    provideStore(),
    provideState(vizReducer),
    provideEffects(vizEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ]
})
  .catch((err) => console.error(err));
