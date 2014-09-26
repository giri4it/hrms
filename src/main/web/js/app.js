/**
 * Created by gireesh.babu on 23/05/14.
 */
define([
    'backbone',
    'marionette'
], function (Backbone, Marionette) {
    var AppManager = new Marionette.Application();

    AppManager.addRegions({
        menuRegion: '#menu-region',
        mainRegion: '#main-region',
        dialogRegion: '#dialog-region'
    });

    AppManager.on('initialize:after', function () {
        console.log('test');
        require(['servicebus','home/home.app'],function(ServiceBus){
            ServiceBus.trigger('home:show');
        })
    });

    return AppManager;

});