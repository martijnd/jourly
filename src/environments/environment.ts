// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCN9dyMJaqt_PlMzUQ0oSFEk2p_9CWmuYI',
    authDomain: 'jourly-3418d.firebaseapp.com',
    databaseURL: 'https://jourly-3418d.firebaseio.com',
    projectId: 'jourly-3418d',
    storageBucket: '',
    messagingSenderId: '546910924781',
    appId: '1:546910924781:web:f83e688910ca3297'
  },
  algolia: {
    appId: 'VVTA2UCGUJ',
    apiKey: (window as any).SERVER_DATA_ALGOLIA_API_KEY
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
