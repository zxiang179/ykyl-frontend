/**
 * Created by Carl_Hugo on 2017/3/30.
 */

(function(){
    'use strict'

    var ykylNav=angular.module('ykylNav',['ykylUtils','ngRoute']);
    ykylNav.config(config);
    config.$inject=['$routeProvider'];
    function config($routeProvider){
        $routeProvider
            .when('/',{
                redirectTo:'/index'
            }).when('/index',{
                templateUrl:'index.html'
            }).when('/test-home',{
                templateUrl:'../test/test-home.html'
            }).when('/pk-home',{
                templateUrl:'../pk/pk-home.html'
            }).when('/queAns-home',{
                templateUrl:'../question_answer/queAns-home.html'
            }).when('/selfInfo-home',{
                templateUrl:'../self_info/selfInfo-home.html'
            });
    }
})();