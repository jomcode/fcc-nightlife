import { bootstrap } from '@angular/platform-browser-dynamic';

import './main.scss'; // goes to style.css via ExtractTextPlugin
import { ENV_PROVIDERS } from './platform/environment';
import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { AppComponent } from './app/app.component';

function main(initialHmrState?: any): Promise<any> {
  return bootstrap(AppComponent, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES
  ])
  .catch((err: any) => console.error(err));
}

if (process.env.NODE_ENV === 'development' && process.env.HMR === 'enabled') {
  let ngHmr: any = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
}
else {
  document.addEventListener('DOMContentLoaded', () => main());
}
