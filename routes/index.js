var express = require('express');
var router = express.Router();
//https://www.npmjs.com/package/include-all
var controllers = require('include-all')({
  dirname     :  __dirname + '/../controllers',
  filter      :  /(.+Controller)\.js$/,
  excludeDirs :  /^\.(git|svn)$/
});

var routerfn = function(req, res, next,methodName) {
	//parse url
	var urldetails = req.path.split('/');
	//get controller
	var currentController = controllers[urldetails[1]+"Controller"]
	if(currentController){
		var controllerInstance = new currentController();
		//get method
		
		if(!methodName){
			methodName = urldetails[2];
		}
		var method = controllerInstance[methodName];
		//get data
		if(!method){
			method = controllerInstance.index;
			methodName = "index";
		}
		controllerInstance[methodName](req,res,next);
		
		return res;
	}else{
		res.render('index', { title: 'Cotton-o-Mill' });
		return res;
	}
}

var routerfuncDefault = function(req, res, next){
	res.render('index', { title: 'Express' });
	return res;
}

var routerfuncGet  = function(req, res, next) {
	routerfn(req,res,next,"index");
}
var routerfuncPost  = function(req, res, next) {
	routerfn(req,res,next,"save");
}
var routerfuncIdGet  = function(req, res, next) {
	routerfn(req,res,next,"getInstance");
}

var routerfuncIdPut  = function(req, res, next) {
	routerfn(req,res,next,"update");
}

//Restfull API
router.get('/',routerfuncDefault);
router.get('/:ctrl',routerfuncGet);
router.post('/:ctrl',routerfuncPost);
router.get('/:ctrl/:id',routerfuncIdGet);
router.put('/:ctrl/:id',routerfuncIdPut);

module.exports = router;
