angular.module('cottonomill').controller('workerListController', function($scope, $state, $stateParams, Worker, $http) {
        $scope.workerInstanceList = Worker.server.query();
        $scope.selectedData = Worker.selectedData;
        $scope.flags = {
            "workerAvailable":false
        };
        $scope.formData = {
            "taskName":"",
            "taskDuration":""
        }
        $scope.saveTask = function(worker){
            worker.taskName = $scope.formData.taskName;
            worker.taskDuration = $scope.formData.taskDuration;
            worker.$update(function(data) {
                console.log(data)
                $scope.formData.taskName = "";
                $scope.formData.taskDuration = "";
                $scope.flags.workerAvailable = false;
                $scope.workerInstanceList = Worker.server.query();
            });
        }
    })