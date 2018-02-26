/**
 * Created by Lcj on 2016/10/20.
 */
(function () {
    "use strict";
    var utils = angular.module('ykylUtils');
    utils.service('userLoginDao',['$http','YkylConnection',userLoginDao]);
    function  userLoginDao($http,conn) {
        var vm =this;
        var BASE_URL ='user';

        vm.sendUserLgMsg=sendUserLgMsg;
        function sendUserLgMsg(user,callback) {
            conn.get(BASE_URL+'/loginByShiro',{'phone':user.phoneNum,'password':user.password},callback);
        }

    }



})();