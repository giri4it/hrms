/**
 * Created by gireesh.babu on 23/05/14.
 */
define(['app','backbone','marionette'],function(MainApp,Backbone,Marionette){
    var ServiceBus = MainApp.module('ServiceBus');
    ServiceBus.commands = new Backbone.Wreqr.Commands();
    ServiceBus.reqres = new Backbone.Wreqr.RequestResponse();
    return ServiceBus;
})