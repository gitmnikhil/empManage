"use strict";

var EmployeeList = require('../model/Employee.js');

function EmployeeController(){

}

var method = EmployeeController.prototype;

method.index = function(req,res,next){
	res.json(EmployeeList);
}
method.save = function(req,res,next){
	var empInstance = req.body;
	empInstance.id = EmployeeList.length + 1;
	EmployeeList.push(empInstance);
	res.json({"status":"success"});	
}
method.getEmpInstance = function(empId){
	var employeeInstance;
	var found = false;
	for(var i=0;i<EmployeeList.length;i++){
		if(EmployeeList[i].id == empId){
			employeeInstance = EmployeeList[i];
		}
	}
	console.log(employeeInstance)
	return employeeInstance;
}
method.getInstance = function(req,res,next){
	var empId = req.path.split('/')[2];
	res.json(this.getEmpInstance(empId));
}

module.exports = EmployeeController;