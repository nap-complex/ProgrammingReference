$(document).ready(function(){
	// AddTask Event
	$('#add-task-form').on('submit', function(e){
		addTask(e);
	});

	// showAnAlert();


	displayTasks();

	function showAnAlert(){
		alert("hello from function");
	}




	// Function to display tasks
	function displayTasks(){
		var taskList =  JSON.parse(localStorage.getItem('tasks'));

		// Sort Tasks
		if(taskList != null){
			taskList = taskList.sort(sortByTime);
		}

		// Set Counter
		var i = 0;
		// Check tasks
		if(localStorage.getItem('tasks') != null){
			// Loop through and display
			$.each(taskList, function(key, value){
				$('#task-table').append('<tr id="'+ value.id +'">' +
										'<td>' + value.task + '</td>' +
										'<td>' + value.task_priority + '</td>' +
										'<td>' + value.task_date + '</td>' +
										'<td>' + value.task_time + '</td>' +
										'<td><a href="edit.html?id='+ value.id +'">Edit</a> | <a href="#" id="remove-task" data-id="'+ value.id +'">Remove</a></td>' +
										'</tr>');
			})
		} // end of if(localStorage...
	}  // end of displayTasks()...



	// Function to sort tasks
	function sortByTime(a, b){
		var aTime = a.task_time;
		var bTime = b.task_time;
		return ((aTime < bTime) ? -1 : ((aTime > bTime) ? 1 : 0));
	}


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
