angular.module('employee').factory('Employee',function($resource){
    return $resource('/Employee/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
})