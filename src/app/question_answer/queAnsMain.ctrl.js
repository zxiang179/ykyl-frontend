/**
 * Created by Lcj on 2016/12/11.
 */
(function () {
    'use strict';
    var ykylQueAnsCenter=angular.module('ykylQueAnsCenter');

    ykylQueAnsCenter.controller('QueAnsCtrl',['$http','$window','$route','queAnsMainDao',QueAnsCtrl]);
    function QueAnsCtrl($http,$window,$route,queAnsMainDao) {
        /*>>>>>>> jlj0711
         >>>>>>> jlj0711
         >>>>>>> jlj0711*/
        var vm = this;
        vm.selectedGrade = selectedGrade;
        vm.selectedSubject = selectedSubject;
        vm.getQueFilterContent = getQueFilterContent;
        vm.getQueAllContent = getQueAllContent;
        //vm.storageQue=storageQue;
        vm.saveQueContent = saveQueContent;
        vm.saveAskContent = saveAskContent;
        vm.isFilterShow = false;
        vm.isAskShow = false;
        vm.isAsk = true;
        var storage = $window.sessionStorage;
        getQueAllContent();

        /*<<<<<<< HEAD
         =======
         <<<<<<< HEAD
         =======
         <<<<<<< HEAD
         =======

         >>>>>>> jlj0711
         >>>>>>> jlj0711
         >>>>>>> jlj0711*/
        vm.grades = [{id: 0, gradeName: '一年级'}, {id: 1, gradeName: '二年级'},
            {id: 2, gradeName: '三年级'}, {id: 3, gradeName: '四年级'},
            {id: 4, gradeName: '五年级'}, {id: 5, gradeName: '预备班'},
            {id: 6, gradeName: '初一'}, {id: 7, gradeName: '初二'},
            {id: 8, gradeName: '初三'}, {id: 9, gradeName: '高一'},
            {id: 10, gradeName: '高二'}, {id: 11, gradeName: '高三'}
        ];
             vm.subjectList=[{id:0,subjectContent:['数学','语文','英语']},{id:1,subjectContent:['数学','语文','英语','物理','化学','生物','历史','政治','地理']}];

        /* <<<<<<< HEAD
         =======
         <<<<<<< HEAD
         =======
         <<<<<<< HEAD
         =======
         */

       /* vm.subject = [{id: 0, subjectName: '数学'}, {id: 1, subjectName: '语文'}, {id: 2, subjectName: '英语'},
            {id: 3, subjectName: '物理'}, {id: 4, subjectName: '化学'}, {id: 5, subjectName: '生物'},
            {id: 6, subjectName: '历史'}, {id: 7, subjectName: '政治'}, {id: 8, subjectName: '地理'}];*/
        /*
         >>>>>>> jlj0711
         >>>>>>> jlj0711
         >>>>>>> jlj0711*/
        vm.gradeSelected = vm.grades[0];
        vm.subSelected = vm.subjectList[0].subjectContent[0];
        vm.subShow = 0;

        function selectedGrade(id) {
            vm.gradeSelected = vm.grades[id];
            if (id <= 4) {
                vm.subShow = 0;
            } else if (id > 4) {
                vm.subShow = 1;
            }
        }

        function selectedSubject(subContent) {
            vm.subSelected = subContent;
        }

        function getQueFilterContent() {
            vm.filterCondition = {
                /*<<<<<<< HEAD
                 =======
                 <<<<<<< HEAD
                 =======
                 <<<<<<< HEAD*/
                /*>>>>>>> jlj0711
                 >>>>>>> jlj0711*/
                filterGrades: vm.gradeSelected.gradeName,
                filterSubject: vm.subSelected
            };
            vm.isFilterShow = false;
            /* queAnsMainDao.getFilterContent(vm.filterCondition,function (response) {
             vm.filterContent=response;
             });*/
            /*<<<<<<< HEAD
             =======
             <<<<<<< HEAD
             =======
             =======
             filterGrades:vm.gradeSelected.id,
             filterSubject:vm.subSelected
             };
             vm.isFilterShow=false;*/
            queAnsMainDao.getFilterContent(vm.filterCondition, function (response) {
                vm.allContent = response.questionAns;
            });
            /*>>>>>>> jlj0711
             >>>>>>> jlj0711
             >>>>>>> jlj0711*/

        }

        //加载页面，获得所有问题内容
        function getQueAllContent() {
            /*<<<<<<< HEAD
             =======
             <<<<<<< HEAD
             =======
             <<<<<<< HEAD
             >>>>>>> jlj0711
             >>>>>>> jlj0711
             /!* queAnsMainDao.getAllContent(function (response) {
             vm.allContent=response;
             });*!/

             $http.get('../json/question.json').success(function (response) {
             vm.allQueContent=response;
             });
             <<<<<<< HEAD
             =======
             <<<<<<< HEAD
             =======
             =======*/
            queAnsMainDao.getAllContent(function (response) {
                vm.allContent = response.questionAns;
                //alert(vm.allContent);
                // console.log(vm.allContent.);
                //将由id表示的年级和科目转为文字描述

                for (var i = 0; i < vm.allContent.length; i++) {
                    //console.log(typeof (0));
                    vm.allContent[i].grade = parseInt(vm.allContent[i].grade);
                    //console.log(typeof (vm.allContent[i].grade));
                    //alert(vm.allContent[i].grade+1);
                    if ((vm.allContent[i].grade) >= 0 && vm.allContent[i].grade < 5) {
                        vm.allContent[i].grade = (vm.allContent[i].grade + 1) + '年级';
                    } else if ((vm.allContent[i].grade) = 5) {
                        vm.allContent[i].grade = '预备班';
                    } else if ((vm.allContent[i].grade) >= 6 && (vm.allContent[i].grade) < 9) {
                        vm.allContent[i].grade = '初' + (vm.allContent[i].grade - 5);
                    } else if ((vm.allContent[i].grade) >= 9 && (vm.allContent[i].grade) < 12) {
                        vm.allContent[i].grade = '高' + (vm.allContent[i].grade - 8);
                    }
                }
            });

            /* $http.get('../json/question.json').success(function (response) {
             vm.allContent=response;
             });*/
            /*>>>>>>> jlj0711
             >>>>>>> jlj0711
             >>>>>>> jlj0711*/
        }

        /*  function storageQue() {
         storage.setItem('currentQuestion', vm.currentQuestionId);
         }*/

        //将点击后的问题详情保存至sessionstorage;
        function saveQueContent(data) {
            /*<<<<<<< HEAD
             //queAnsMainDao.queContentSet(data);
             var str =angular.toJson(data);
             storage.setItem('currentQuestion', str);
             =======
             <<<<<<< HEAD
             //queAnsMainDao.queContentSet(data);
             var str =angular.toJson(data);
             storage.setItem('currentQuestion', str);
             =======
             <<<<<<< HEAD
             //queAnsMainDao.queContentSet(data);
             var str =angular.toJson(data);
             storage.setItem('currentQuestion', str);
             =======*/
            queAnsMainDao.queContentSet(data);
            /*var str =angular.toJson(data);
             storage.setItem('currentQuestion', str);*/
            /*>>>>>>> jlj0711
             >>>>>>> jlj0711
             >>>>>>> jlj0711*/

        }

        //保存提问内容
        function saveAskContent() {
            /*<<<<<<< HEAD
             vm.askContent.gradeTag= vm.gradeSelected.gradeName;
             queAnsMainDao.askContentSave(vm.askContent);
             =======
             <<<<<<< HEAD
             vm.askContent.gradeTag= vm.gradeSelected.gradeName;
             queAnsMainDao.askContentSave(vm.askContent);
             =======
             <<<<<<< HEAD
             vm.askContent.gradeTag= vm.gradeSelected.gradeName;
             queAnsMainDao.askContentSave(vm.askContent);
             =======*/
            vm.askContent.gradeTag = vm.gradeSelected.id;
            queAnsMainDao.askContentSave(vm.askContent, function (response) {
                if (response != " ") {
                    //alert("提问成功");
                    //$location.path('/queAnsMain');
                    $route.reload();

                }

            });
            /*>>>>>>> jlj0711
             >>>>>>> jlj0711
             >>>>>>> jlj0711*/
        }

    }

})();