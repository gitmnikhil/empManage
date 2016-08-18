angular.module('employee').controller('employeeListController',function($scope,$state,$stateParams,Employee,$http){
    $scope.employeeInstanceList = Employee.query();
    $scope.sortBy = "name";
    $scope.sortField = ["name","dateofBirth","dateofJoining","department","title"];
    $scope.groupField = ["none","name","dateofBirth","dateofJoining","department","title"];
    $scope.viewList = ["details","card","list"];
    $scope.groupByField = "none";
    $scope.view = "details";
    $scope.reverseSort = true; 
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
