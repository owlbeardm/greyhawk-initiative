'use strict';
// import './src/css/app.css';
import './src/components/components.module.js';

const initiativeApp = angular.module('initiativeApp', [
    'app.components'
]);


import AppComponent from './src/app.component.js';

initiativeApp.component('app', AppComponent);

// initiativeApp.config([]);

// initiativeApp.run([]);
