/**
 * Created by gireesh.babu on 23/05/14.
 */

define(['../app',
    'marionette','servicebus'], function (AppManager, Marionette, ServiceBus) {

    var beforeLoginHomeView ={};

    var HomeController = Marionette.Controller.extend( {

        showHome: function () {
            require(['home/homeView'], function (HomeView) {

                var beforeLoginHomeView = new HomeView();
                AppManager.mainRegion.show(beforeLoginHomeView);

                require(['common/menucontroller','common/footercontroller'],function(){
                    ServiceBus.trigger('menu:show');
                    ServiceBus.trigger('footer:show');
                });

                ServiceBus.on('show:welcome', function(){
                    console.log('show:welcome received');

                    console.log('home view closed');
                    require(['home/welcomehomeview'],function(WelcomeHomeView){
                        var welcomeHomeView = new WelcomeHomeView();
                        AppManager.mainRegion.show(welcomeHomeView);
                    });
                    beforeLoginHomeView.close();

                    console.log('welcome view loaded');

                });
            });
        },
        showWelcomeHome: function(){

        }
    });


    return HomeController;
});
