$(document).ready(function(){
	$('#add-task-form').on('submit', function(e){
		addTask(e);
	});


	// Function to add a task
	function addTask(e){
		// Add Unique ID
		var newDate = new Date();
		id = newDate.getTime();

		var task = $('#task').val();
		var task_priority = $('#priority').val();
		var task_date = $('#date').val();
		var task_time = $('#time').val();

		// Simple Validation
		if(task == ''){
			alert('Task is required');
			e.preventDefault();
		} else if(task_date == '') {
			alert('Date is required');
			e.preventDefault();
		} else if(task_time == ''){
			alert('Time is required');
			e.preventDefault();
		} else if(task_priority == ''){
			task_priority = 'normal';
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));

			//Check Tasks
			if(tasks == null){
				tasks = [];
			}

			var taskList = JSON.parse(localStorage.getItem('tasks'));

			// New Task Object
			var new_task = {
				"id": id,
				"task": task,
				"task_priority": task_priority,
				"task_date": task_date,
				"task_time": task_time
			}

			tasks.push(new_task);
			localStorage.setItem('tasks', JSON.stringify(tasks));

			console.log('Task Added');
		}
	}
});