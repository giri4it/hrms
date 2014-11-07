/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../app',
    'marionette'], function (AppManager, Marionette) {

    var LoginController = Marionette.Controller.extend( {

        showLogin: function () {
            console.log("show Login called");
            require(['login/loginview','login/loginmodel'], function (LoginView, LoginModel) {

                var loginModel = new LoginModel();
                var view = new LoginView(loginModel);
                AppManager.loginRegion.show(view);
                view.showLogin();
            });
        }
    });

    return LoginController;
});