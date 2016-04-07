// import the parent component
// host the user experience
// the component controls a portion of the screen

import {Component} from 'angular2/core';

// decorator tell us what template to use
// how to create the component
// metadata
// selector is a simple css
@Component({
    selector: 'my-app',
    template: '<h1>My first angularjs2 app </h1>'
})

// controls the appearance and behavior of a view through its template
// we will include application logic
export class AppComponent { }