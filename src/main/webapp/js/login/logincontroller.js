/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../app',
    'marionette'], function (AppManager, Marionette) {

    var LoginController = Marionette.Controller.extend( {

        showLogin: function () {
            console.log("show Login called");
            require(['login/loginview'], function (LoginView) {

                var view = new LoginView();
                AppManager.loginRegion.show(view);
                view.showLogin();
            });
        }
    });

    return LoginController;
});