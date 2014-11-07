/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../backbone', 'text!login/login.hb', 'handlebars', 'login/loginProperties',
        'login/loginmodel','jqueryui','backbone.stickit'],
    function (Backbone, TemplateLogin, Handlebars, LoginProperties, LoginInfo) {


        var template = Handlebars.compile(TemplateLogin);
        var LoginView = Backbone.View.extend({

            initialize: function(){
              this.model = new LoginInfo();
                console.log("Login model initialized");
            },
            events:{
              'click #submit': 'submitLogin'
            },
            bindings:{
                '#userName': { observe: 'userName', events: ['blur']},
                '#password': { observe: 'password', events: ['blur']}
            },
            render: function () {
                this.$el.html(template({
                    title: LoginProperties.LOGIN_TITLE_TITLE,
                    userName: LoginProperties.LOGIN_USERNAME,
                    password: LoginProperties.LOGIN_PASSWORD,
                    submit: LoginProperties.LOGIN_SUBMIT
                }));
                this.stickit();
            },
            showLogin: function (){
                console.log("Show Login");
                this.render();
            },
            submitLogin: function(){
                console.log("submit called login view");
                this.model.save();
            },
            _trimVal: function ($el, event, options) {
                console.log("trim is called on" + $el.val());
                var val = _.trim($el.val());
                $el.val(val);
                return val;
            }

        });

        return LoginView;
    });
