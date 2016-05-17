import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
//import { HTTP_PROVIDERS }    from 'angular/http';

bootstrap(AppComponent, [
        ROUTER_PROVIDERS,
        //HTTP_PROVIDERS,
        // set a custom default options for the modal.
        ELEMENT_PROBE_PROVIDERS // remove in production
    ])
    .catch(err => console.error(err));