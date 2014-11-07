/**
 * Created by gireesh.babu on 07/11/14.
 */


/**
 * Created by gireesh.babu on 20/10/14.
 */

define(['../backbone',  'jquery'],
    function (Backbone, $) {

        var LoginInfo = Backbone.Model.extend({
            defaults:{
                userName:'',
                password:''
            },
            url:'/hrms/controller/login/authenticate'
        });
        return LoginInfo;

    });