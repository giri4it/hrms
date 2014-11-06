/**
 * Created by gireesh.babu on 24/10/14.
 */

define(['../app',
    'marionette','servicebus'], function (AppManager, Marionette, ServiceBus) {

    var MenuController = Marionette.Controller.extend( {
        showMenu: function () {
            require(['common/menuview'], function (MenuView) {

                var view = new MenuView();
                AppManager.menuRegion.show(view);
                view.showAccordion();
            });
        }

    });

    ServiceBus.on('menu:show',function(){
        console.log("Menu controller menu:show Trigger received");

        var menuController = new MenuController();
        menuController.showMenu();

    });

    return MenuController;
});
