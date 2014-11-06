/**
 * Created by gireesh.babu on 23/05/14.
 */
define(['../app','servicebus'],function(AppManager,ServiceBus){
    var MainApp = AppManager.module('MainApp');

    MainApp.showHome = function(){
        require(['home/homeController'],function(HomeController){
            var homeController = new HomeController();
            homeController.showHome();

        })
    }

    ServiceBus.on('home:show',function(){
        console.log("Trigger received");
        MainApp.showHome();
    });

    return MainApp;
})