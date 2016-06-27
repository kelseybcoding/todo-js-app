(function(){
	"use strict";
	angular.module("app").controller("todoCtrl", function($scope){
		
		$scope.tasks = [
		{
			item: "Buy Groceries",
			completed: false
		};{
			 item: "Eat Groceries",
			 completed: false
		};{
			 item: "Buy more groceries",
			 completed: false
		}];
		
		$scope.addTask = function(taskItem){
			var newTask = {
				item: taskItem,
				completed: false
			};
		$scope.toggleComplete = function(task)
		}
		
	});

}());