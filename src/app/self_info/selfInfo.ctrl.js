/**
 * Created by Lcj on 2016/11/7.
 */
(function () {
    'use strict';
    var ykylSelfInfo=angular.module('ykylSelfInfo');
  ykylSelfInfo.controller('SelfInfoCtrl',['$http','userInfoDao',SelfInfoCtrl]);
    function SelfInfoCtrl($http,userInfoDao) {
        var vm=this;
        //vm.changePic=changePic;
        vm.showChange=false;
        vm.saveSelfInfo=saveSelfInfo;
        //vm.username=selfInfoSetDao.usernameGet();

        userInfoDao.userUpdateSet(true);
         vm.user =userInfoDao.userInfoGet();


        if(vm.user.hasValue!=true){

            userInfoDao.getSelfInfo(function (response) {
                    vm.user=response;
                if(vm.user.gender==0){
                    vm.user.genderName='男';
                }else if(vm.user.gender==1){
                    vm.user.genderName='女';
                }
                vm.user.gradeName=vm.user.grade + '年级';
                /*第一次展示个人信息页面时数据从后台获取，此时，对年级和学校的显示做一定的设置*/
                if (parseInt(vm.user.grade ) >= 0 && parseInt(vm.user.grade ) < 5) {
                    vm.user.gradeName = (parseInt(vm.user.grade )+ 1) + '年级';
                } else if (parseInt(vm.user.grade)== 5) {
                    vm.user.gradeName = '预备班';
                } else if (parseInt(vm.user.grade ) >= 6 && parseInt(vm.user.grade ) < 9) {
                    vm.user.gradeName = '初' + parseInt((vm.user.grade) - 5);
                } else if (parseInt(vm.user.grade ) >= 9 && parseInt(vm.user.grade )< 12) {
                    vm.user.gradeName = '高' + parseInt((vm.user.grade )- 8);
                }


                     userInfoDao.genderSet(vm.user.genderName);
                     userInfoDao.gradeSet(vm.user.gradeName);
                     userInfoDao.schoolSet(vm.user.school);

            });


            //selfInfoSetDao.userInfoSet(vm.user);

       /*$http.get('selfInfo.json').success(function (response) {
           vm.user=response.user[0];
       });*/
        }else /*if(vm.user.username)*/{
            vm.user=userInfoDao.userInfoGet();

        }



        function saveSelfInfo() {
            userInfoDao.userInfoSet(vm.user);
        }




    }
})();