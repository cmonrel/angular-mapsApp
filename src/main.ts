import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoidmlpY2ZkZXowMyIsImEiOiJjbHY0dzZmejEwNWJvMnFwOXlhdXh1Z3hsIn0.YG0AJGb-nmusG6Akn-h3Nw';

if (!navigator.geolocation) {
  alert('Navigator is not supported by the browser');
  throw new Error('Navigator is not supported by the browser');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
