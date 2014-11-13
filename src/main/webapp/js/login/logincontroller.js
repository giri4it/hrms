/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../app',
    'marionette','servicebus'], function (AppManager, Marionette, ServiceBus) {

    var LoginController = Marionette.Controller.extend( {

        showLogin: function () {
            console.log("show Login called");
            require(['login/loginview','login/loginmodel'], function (LoginView, LoginModel) {

                var loginModel = new LoginModel();
                var view = new LoginView(loginModel);
                AppManager.loginRegion.show(view);
                view.showLogin();
                view.once('loginsuccess',  function(){
                    console.log('hide called');
                    AppManager.loginRegion.close();
                    ServiceBus.trigger('show:welcome');
                });
            });
        }

    });

    return LoginController;
});