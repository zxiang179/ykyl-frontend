/**
 * Created by Lcj on 2016/12/15.
 */
(function () {
    'use strict';
    var ykylQueAnsCenter=angular.module('ykylQueAnsCenter');
    ykylQueAnsCenter.controller('QueAnsDetailCtrl',['$http','queAnsMainDao','$window',QueAnsDetailCtrl]);
    function QueAnsDetailCtrl($http,queAnsMainDao,$window) {
        var vm=this;
        vm.getAnsContent=getAnsContent;
        vm.queDetail='';
/*<<<<<<< HEAD
        var storage = $window.sessionStorage;
        vm.queDetailStr=storage.getItem('currentQuestion');
        vm.queDetail=angular.fromJson(vm.queDetailStr);
=======
<<<<<<< HEAD
        var storage = $window.sessionStorage;
        vm.queDetailStr=storage.getItem('currentQuestion');
        vm.queDetail=angular.fromJson(vm.queDetailStr);
=======
<<<<<<< HEAD
        var storage = $window.sessionStorage;
        vm.queDetailStr=storage.getItem('currentQuestion');
        vm.queDetail=angular.fromJson(vm.queDetailStr);
=======*/
        /*var storage = $window.sessionStorage;
        vm.queDetailStr=storage.getItem('currentQuestion');
        vm.queDetail=angular.fromJson(vm.queDetailStr);*/
        vm.queDetail=queAnsMainDao.queContentGet();
/*>>>>>>> jlj0711
>>>>>>> jlj0711
>>>>>>> jlj0711*/
        vm.updateSupport=updateSupport;

        getAnsContent();

        function getAnsContent() {
            /*<<<<<<< HEAD
             =======
             <<<<<<< HEAD
             =======
             <<<<<<< HEAD
             >>>>>>> jlj0711
             >>>>>>> jlj0711*/
           // vm.id = vm.queDetail.id;
                queAnsMainDao.getAnsDetailContent(vm.queDetail.id, function (response) {
                   // vm.allContent = response;
                    vm.answerContent=response.comments;
                   vm.isSupported=new Array(response.comments.length);
                    for (var  i=0;i<response.comments.length;i++){
                        vm.isSupported[response.comments[i].id]=false;

                    }
                });
        }

          /*  $http.get('../dao/user/json/answer.json').success(function (response) {
                vm.answerContent=response;
            });
        }*/
      /*  function updateSupport(num) {
           vm.supportNum=vm.answerContent.supportCount;
            queAnsMainDao.updateSupportNum(num);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
             vm.id=vm.queDetail.id;
            queAnsMainDao.getAnsDetailContent(vm.queDetail.id,function (response) {
             vm.answerContent=response.comments;
                vm.queDetail.commentCount++;
             });

           /!* $http.get('../dao/user/json/answer.json').success(function (response) {
                vm.answerContent=response;
            });*!/
        }*/
        function updateSupport(id) {
           // vm.supportNum=vm.answerContent.zan;

            queAnsMainDao.updateSupportNum(id,function (response) {
                /*vm.answerContent=response.comments;
                vm.queDetail.commentCount++;*/

            });
/*>>>>>>> jlj0711
>>>>>>> jlj0711
>>>>>>> jlj0711*/
        }

    }
})();