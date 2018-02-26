/**
 * Created by Lcj on 2016/12/13.
 */
(function () {
    'use strict';
    var utils = angular.module('ykylUtils');
    utils.service('queAnsMainDao',['YkylConnection','$http',queAnsMainDao]);
    function queAnsMainDao(conn,$http) {
        var vm=this;
        var BASE_URL='/questionAnswer';

        var BASE_URL2='/questionComments';

        var evePageLength=5;
        vm.getFilterContent=getFilterContent;
        vm.getAllContent=getAllContent;
        vm.getAnsDetailContent=getAnsDetailContent;
        vm.updateSupportNum=updateSupportNum;
        vm.saveComment=saveComment;
        vm.askContentSave=askContentSave;
        vm.setRevQueAns=setRevQueAns;
        vm.getPriorQueAns=getPriorQueAns;
        vm.setCommNum=setCommNum;
/*<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======*/
        vm.queContentSet=queContentSet;
        vm.queContentGet=queContentGet;
/*>>>>>>> jlj0711
>>>>>>> jlj0711
>>>>>>> jlj0711*/


        //创建一个数组保存接收到的问答内容
        vm.QueAnsList=[];

        //创建一个数组，保存上一页的内容，返回给controller。
        vm.priorQueAnsList=[];

        //保存已经接受到的问答内容   revQueAns是一个obj数组
        function setRevQueAns(revQueAns){


            var i=0;
            for(var j= vm.QueAnsList.length;j<revQueAns.length;j++){
                vm.QueAnsList[j]=revQueAns[i];
                i++;
            }
        }
        //在点击上一页时，将上一页的内容发送给controller
        function getPriorQueAns(order) {
            for(i=order-evePageLength;i--;i<order){
                vm.priorQueAnsList[i]=vm.QueAnsList[i];
            }
               return  vm.priorQueAnsList;
        }

/*<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> jlj0711
>>>>>>> jlj0711*/

    /*    //获得过滤后的内容
        function getFilterContent(filterCondition,callback) {
            conn.get(BASE_URL+'/filterQuestion',{'filterGrades':filterCondition.filterGrades,'filterSubject':filterCondition.filterSubject},callback);
        }
        //获得所有的内容
        function getAllContent(receivedCounts,callback) {
            conn.get(BASE_URL + '/findQuestionAns', {'receivedCounts': receivedCounts}, callback);
        }
/!*<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======*!/*/
        //点击问题时，保存当前点击的问题信息
        function queContentSet(queInfo) {
            vm.queContent={
                id:queInfo.id,
                username:queInfo.userName,
                commentCount:queInfo.count,
                question:queInfo.questionDetail,
                gradeTag:queInfo.grade,
                subTag:queInfo.subject
            }
        }
        function queContentGet() {
            return vm.queContent;
        }
         //提交评论时更改评论数量
        function setCommNum(){
            vm.queContent.commentCount+=1;
        }
        //获得过滤后的内容
        function getFilterContent(filterCondition,callback) {
            conn.get(BASE_URL+'/findQuestionAns',{'grades':filterCondition.filterGrades,'subject':filterCondition.filterSubject},callback);
        }
        //获得所有的内容
        function getAllContent(callback) {
            //conn.get(BASE_URL+'/findQuestionAns', {'receivedCounts':receivedCounts},callback);
            conn.get(BASE_URL+'/findQuestionAns', '',callback);
/*>>>>>>> jlj0711
>>>>>>> jlj0711
>>>>>>> jlj0711*/
        }

        //获得每个问题对应的评论
        function getAnsDetailContent(id,callback) {

            conn.get(BASE_URL2+'/findCommentsByQueId', {'qid':id},callback);
        }
        //更新问题的点赞数
     /*   function updateSupportNum(aid) {
            conn.get(BASE_URL+'/zan', {'commmentId':aid},'');
        }

        //提交评论内容
        function saveComment(qid,content) {
            conn.get(BASE_URL+'/addComment',{'questionId':qid,'comment':content},'');
        }
        //保存提出的问题
        function askContentSave(content) {
            conn.get(BASE_URL+'/addQuestion',{'gradeTag':content.gradeTag,'subTag':content.subTag,'question':content.question},'');

            conn.get(BASE_URL2+'/findCommentsByQueId', {'qid':id},callback);
        }
        //更新问题的点赞数*/
        function updateSupportNum(cid,callback) {
            conn.get(BASE_URL2+'/zan', {'cid':cid},callback);
        }

        //提交评论内容
        function saveComment(qid,content,callback) {
            conn.get(BASE_URL2+'/addComments',{'qid':qid,'comment':content},callback);
        }
        //保存提出的问题
        function askContentSave(content,callback) {
            conn.get(BASE_URL+'/addQuestionAns',{'grade':content.gradeTag,'subject':content.subTag,'questionDetail':content.question},callback);

        }




}})();