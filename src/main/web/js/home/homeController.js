/**
 * Created by gireesh.babu on 23/05/14.
 */

define(['../app',
    'marionette'], function (AppManager, Marionette) {

    var HomeController = Marionette.Controller.extend( {
        showHome: function () {
            require(['home/homeView'], function (HomeView) {

                var view = new HomeView();
                AppManager.mainRegion.show(view);
                view.showAccordion();
            });
        }
    });

    return HomeController;
});
