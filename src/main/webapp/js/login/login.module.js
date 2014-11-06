/**
 * Created by gireesh.babu on 27/09/14.
 */
define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'login/logincontroller',
    'common/footercontroller',
    'common/menucontroller',
    'servicebus'
], function ($, Backbone, Marionette, LoginApp, LoginController, FooterController, MenuController, ServiceBus) {

    var LoginModule = Marionette.Module.extend({

        initialize: function () {
            var self = this;
                //loginChannel = Backbone.Wreqr.radio.channel('login');

            /*loginChannel.vent.on('link:redirect', function (args) {
                self.stop();
                window.location.href = args.redirectUrl;
            });
            */

        },
        onStart: function () {
            console.log("Login module onStart is Triggered");
            this._loginController = new LoginController({});
            this._menuController = new MenuController();
            this._footerController = new FooterController({});

            this._menuController.showMenu();
            this._footerController.showFooter();
            this._loginController.showLogin();
        },

        onBeforeStop: function () {
            this._loginController.destroy();
            this._menuController.destroy();
            this._footerController.destroy();
        }

    });

    LoginApp.module('LoginModule', LoginModule,{});

    ServiceBus.on('login:show',function(){
        console.log("Trigger received Login:show");
        loginModule  = new LoginModule('LoginModule',LoginApp,{});
        //loginModule.showLogin();

    })

    return LoginModule;

});