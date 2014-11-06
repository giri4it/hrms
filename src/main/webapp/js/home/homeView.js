/**
 * Created by gireesh.babu on 23/05/14.
 */
define(['../backbone', 'text!home/home.hb', 'handlebars', 'home/homeProperties','jqueryui'],
    function (Backbone, TemplateHome, Handlebars, HomeProperties) {


    var template = Handlebars.compile(TemplateHome);
    var HomeView = Backbone.View.extend({
            render: function () {
                this.$el.html(template({
                    //title: HomeProperties.HEAD_TITLE,
                    //menuhead: HomeProperties.MENU_HEAD,
                    //menuitem1: HomeProperties.MENU_ITEM1
                }));
            }

        });

    return HomeView;
});