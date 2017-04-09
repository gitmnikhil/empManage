angular.module('cottonomill').factory('Worker',function($resource){
    return {
    	"server": $resource('/Worker/:id',{id:'@id'},{
			        update: {
			            method: 'PUT',
			             isArray: false
			        }
			    }),
	    "selectedData":{
	    	"selectedWorker":{}
	    }
    };
})