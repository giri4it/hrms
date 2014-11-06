/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../backbone', 'text!login/login.hb', 'handlebars', 'login/loginProperties','jqueryui'],
    function (Backbone, TemplateLogin, Handlebars, LoginProperties) {


        var template = Handlebars.compile(TemplateLogin);
        var LoginView = Backbone.View.extend({
            render: function () {
                this.$el.html(template({
                    title: LoginProperties.LOGIN_TITLE_TITLE,
                    userName: LoginProperties.LOGIN_USERNAME,
                    password: LoginProperties.LOGIN_PASSWORD,
                    submit: LoginProperties.LOGIN_SUBMIT
                }));
            },
            showLogin: function (){
                console.log("Show Login");
                this.render();
            }

        });

        return LoginView;
    });
