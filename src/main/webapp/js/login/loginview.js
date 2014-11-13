/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['q','../backbone', 'text!login/login.hb', 'handlebars', 'login/loginProperties',
        'login/loginmodel','jqueryui','backbone.stickit'],
    function (Q, Backbone, TemplateLogin, Handlebars, LoginProperties, LoginInfo) {


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
                var self = this,
                    deferred = Q.defer();
                self._data = {};
                this.model
                    .fetch()
                    .done(
                        function(data){
                          self._data =  _.extend(self._data, data);
                            deferred.resolve();
                            console.log('data :'+ JSON.stringify(  self._data));
                        }
                    )
                    .error(
                        function(){
                            console.log("Error");
                            deferred.reject();
                        }
                    );

                Q.all([Q.when(deferred.promise)])
                    .then(
                    function(){
                        console.log(' Q data :'+ JSON.stringify(  self._data.loginStatus));
                        if(self._data.loginStatus === true){
                            self.trigger('loginsuccess');
                            console.log('loginsuccess triggered');
                        } else {
                            console.log('not triggered');
                        }
                    },function(error){
                        console.log('model error:'+ JSON.stringify(  error));
                    });

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
