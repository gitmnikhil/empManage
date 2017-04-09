"use strict";

var WorkerList = require('../model/Worker.js');

function WorkerController(){

}

var method = WorkerController.prototype;

method.index = function(req,res,next){
	for(var i=0;i<WorkerList.length;i++){
		if(WorkerList[i].startTime){
			var startTime = new Date(WorkerList[i].startTime);
			var endTime = startTime.setSeconds(startTime.getSeconds()+ parseInt(WorkerList[i].taskDuration));
			if(endTime < new Date()){
				WorkerList[i].taskAssigned = "";
				WorkerList[i].taskDuration = undefined;
				WorkerList[i].startTime = undefined;
			}
		}
	}
	res.json(WorkerList);
}
method.update = function(req,res,next){
	console.log("came here")
	var workerId = req.body.id;
	for(var i=0;i<WorkerList.length;i++){
		if(WorkerList[i].id === workerId){
			WorkerList[i].taskAssigned = req.body.taskName;
			WorkerList[i].taskDuration = req.body.taskDuration;
			WorkerList[i].startTime = new Date();
		}
	}
	console.log("ooops")
	res.json({"status":"success"});	
}
module.exports = WorkerController;