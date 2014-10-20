/**
 * Created by gireesh.babu on 27/09/14.
 */
define([
    'common/jqueryex',
    'backbone',
    'marionette',
    'login/app',
    'login/logincontroller',
    'login/footercontroller'
], function ($, Backbone, Marionette, LoginApp, LoginController, FooterController) {

    var LoginModule = Marionette.Module.extend({

        initialize: function () {
            var self = this,
                loginChannel = Backbone.Wreqr.radio.channel('login');

            loginChannel.vent.on('link:redirect', function (args) {
                self.stop();
                window.location.href = args.redirectUrl;
            });


        },

        onStart: function () {
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

    LoginApp.module('LoginModule', LoginModule);

    return LoginModule;
});