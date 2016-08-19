angular.module('employee').factory('Employee',function($resource){
    return $resource('/Employee/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
})
angular.module('employee').filter("searchfilter", function() { 
    return function (objectList, searchString) {
    	searchString = searchString?searchString.toLowerCase():""
        return objectList.filter(function (item) {
        	console.log(item)
            if(item.name.toLowerCase().indexOf(searchString)>-1 || 
            	item.department.toLowerCase().indexOf(searchString)>-1 ||
            	 item.title.toLowerCase().indexOf(searchString)>-1){
            	return true;    
            }else{
            	return false;
            }
        });
    };
});