/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../app',
    'marionette'], function (AppManager, Marionette) {

    var LoginController = Marionette.Controller.extend( {
        showLogin: function () {
            require(['home/loginView'], function (LoginView) {

                var view = new LoginView();
                AppManager.mainRegion.show(view);
                view.showLogin();
            });
        }
    });

    return LoginController;
});