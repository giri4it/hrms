/**
 * Created by gireesh.babu on 24/10/14.
 */
define(['../backbone', 'text!common/menu.hb', 'handlebars', 'common/menuproperties','jqueryui'],
    function (Backbone, TemplateHome, Handlebars, HomeProperties) {


        var template = Handlebars.compile(TemplateHome);
        var MenuView = Backbone.View.extend({
            render: function () {
                this.$el.html(template({
                    title: HomeProperties.HEAD_TITLE,
                    menuhead: HomeProperties.MENU_HEAD,
                    menuitem1: HomeProperties.MENU_ITEM1
                }));
            },
            showAccordion: function (){
                $("#accordion").accordion();
            }

        });

        return MenuView;
    });
