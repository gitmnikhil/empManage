angular.module("cottonomill").directive("listElement",function(){
	
	return {
		restrict:"E",
		templateUrl:"js/directive/template/listelement.html",
		scope:false,
		link:function(scope, element, attrs){
			scope.selectEle = function(){
				scope.selectedData.selectedWorker = scope.worker
				if(scope.worker.taskAssigned === "" || scope.worker.taskAssigned === undefined){
					scope.flags.workerAvailable = true;
				}else{
					scope.flags.workerAvailable = false;
				}
			}
		}
	}
})