var todos=angular.module("list", []);
todos.controller("listcontrol",function($scope){
    $scope.lists=["Task Shown Here"];
    $scope.newlist="";
    $scope.pushlist = function(){
        if($scope.newlist!=""){
            if($scope.lists.length<=8){
                $scope.lists.push($scope.newlist);
                $scope.newlist="";
            }else{
                alert("Task Full");
            }
        }
    }
    $scope.poplist=function(index){
        $scope.lists.splice(index,1);
    }
});