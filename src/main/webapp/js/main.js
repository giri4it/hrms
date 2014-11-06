/**
 * Created by gireesh.babu on 23/05/14.
 */

require.config({
        paths:{
            jquery:'require-jquery',
            handlebars: 'handlebars',
            underscore: 'underscore',
            text:'text',
            backbone:'backbone',
            marionette:'backbone.marionette',
            'backbone.wreqr':'backbone.wreqr',
            'backbone.babysitter': 'backbone.babysitter',
            jqueryui:'jquery-ui-1.10.2.custom',
            'backbone.radio':'backbone.radio'
        }, waitSeconds:0,
        shim: {
            jquery: {
                exports: '$'
            },
            handlebars : { exports: 'Handlebars' },
            underscore: { exports: '_' },
            'underscore.string': ['underscore'],
            backbone: {
                deps: ['underscore','jquery'],
                exports: 'Backbone'
            },
            marionette: {
                deps: ['backbone'],
                exports: 'Marionette'
            },
            jqueryui: {
                deps: ['jquery']
            },
            'backbone.radio': {
                deps:['backbone']
            }
        }
    });

require(['app'], function(Manager){
    console.log('App is getting started');
    Manager.start();
    console.log('App started');

});

