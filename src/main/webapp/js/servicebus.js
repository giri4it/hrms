/**
 * Created by gireesh.babu on 23/05/14.
 */
define(['app','backbone','marionette','backbone.radio'],function(MainApp,Backbone, Marionette, Radio){
    var ServiceBus = MainApp.module('ServiceBus');
    ServiceBus.commands = new Backbone.Wreqr.Commands();
    ServiceBus.reqres = new Backbone.Wreqr.RequestResponse();
    //ServiceBus.radio = new Backbone.Wreqr.Radio.Channel('global');
    return ServiceBus;
})