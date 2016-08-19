angular.module('employee').controller('employeeListController',function($scope,$state,$stateParams,Employee,$http){
    $scope.employeeInstanceList = Employee.query();
    $scope.sortField = ["name","department","title"];
    $scope.groupField = ["none","department","title"];
    $scope.viewList = ["details","card","list"];
    $scope.sortBy = $scope.sortField[0];
    $scope.groupByField = $scope.groupField[0];
    $scope.view = $scope.viewList[0];
    $scope.reverseSort = false; 
    $scope.setSorting = function(sortField){
        if($scope.sortBy === sortField){
            $scope.reverseSort = !$scope.reverseSort;
        }else{
            $scope.sortBy = sortField;
            $scope.reverseSort = false;
        }
    }
})
.controller('employeeViewController',function($scope,$stateParams,Employee,$http){
    $scope.employee=Employee.get({id:$stateParams.id});
})
.controller('employeeCreateController',function($scope,$state,$stateParams,Employee,$http){
    $scope.employee=new Employee();
	$scope.addEmployee=function() {
        $scope.employee.$save(function(data){
            if(data.status=="success"){
                $state.go('ViewAll',{name:"employee"});
            }
            else{
                console.log(data)
                $scope.validationMsg ="";
                for(var i=0;i<data.validationMsg.length;i++){
                    $scope.validationMsg += data.validationMsg[i];
                }
            }
            
        });
    }
});
