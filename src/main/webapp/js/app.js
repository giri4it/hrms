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
        dialogRegion: '#dialog-region',
        loginRegion:'#login-region',
        footerRegion:'#footer-region'
    });

    AppManager.on('initialize:after', function () {
        console.log('test');
        require(['servicebus','home/home.app','login/login.module'],function(ServiceBus){
            ServiceBus.trigger('home:show');
            ServiceBus.trigger('login:show');
        })
    });

    return AppManager;

});