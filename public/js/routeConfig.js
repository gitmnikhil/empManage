angular.module('employee',  ['ui.router','ngResource','angular.filter']);
angular.module('employee').config(function($stateProvider,$httpProvider){
    $stateProvider.state('ViewAll',{
        url:'/:name',
        templateUrl: function(params){
            return "/view/" + params.name.toLowerCase() + "/" + params.name.toLowerCase() + ".html"
        },
        controllerProvider:function($stateParams){
            return $stateParams.name.toLowerCase() + 'ListController'
        }
    }).state('viewItem',{
        url:'/:name/view/:id',
        templateUrl: function($stateParams){
            return "/view/" + $stateParams.name.toLowerCase() + "/" + $stateParams.name.toLowerCase() + "-view.html"
        },
        controllerProvider:function($stateParams){
            return $stateParams.name.toLowerCase() + 'ViewController'
        }
    }).state('newItem',{
        url:'/:name/new',
        templateUrl: function(params){
            return "/view/" + params.name.toLowerCase() + "/" + params.name.toLowerCase() + "-add.html"
        },
        controllerProvider:function($stateParams){
            return $stateParams.name.toLowerCase() + 'CreateController'
        }
    });
})
