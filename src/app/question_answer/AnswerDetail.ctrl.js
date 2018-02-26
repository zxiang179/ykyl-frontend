/**
 * Created by Lcj on 2016/12/19.
 */
(function () {
    'use strict';
     var ykylQueAnsCenter=angular.module('ykylQueAnsCenter');


    ykylQueAnsCenter.controller('AnsDetailCtrl',['$http','$window','queAnsMainDao','$location',AnsDetailCtrl]);
    function AnsDetailCtrl($http,$window,queAnsMainDao,$location) {
        var vm=this;
       vm.saveCommentContent=saveCommentContent;
        var storage = $window.sessionStorage;
      /*  vm.queDetailStr=storage.getItem('currentQuestion');
        vm.queDetail=angular.fromJson(vm.queDetailStr);*/
        vm.queDetail=queAnsMainDao.queContentGet();
        vm.commentContent='';
        function saveCommentContent() {
            queAnsMainDao.saveComment(vm.queDetail.id,vm.commentContent,function (response) {
                if(response!=''){
                    queAnsMainDao.setCommNum();
                    $location.path('/queAnsDetail');
                }
            });

        }
    }
})();