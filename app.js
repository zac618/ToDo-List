let todoArray = [];

document.getElementById('add_button').addEventListener('click', function() {
	let list = document.getElementById('myUL');
	let todoInput = document.getElementById('myInput').value;
	todoArray.push(todoInput);

	let item = document.createElement('li');
	for (var i = 0; i < todoArray.length; i++) {
		var listItem = document.createTextNode(todoArray[i]);
		list.append(document.createTextNode(todoArray[i]));
	}
});

// So far, I like the below option the best

// function addingTask() {
// 	let inputText = document.getElementById('myInput').value;
// 	todoArray.push(inputText);
// }

// function printTodos() {
// 	let list = document.getElementById('myUL');
// 	// list.innerHTML = ''; // Reset the list content whenever we print the todos

// 	for (let i = 0; i < todoArray.length; i++) {
// 		let li = document.createElement('li');
// 		let listItem = li.appendChild(document.createTextNode(todoArray[i]));
// 		list.appendChild(listItem);
// 	}
// }

// document.getElementById('add_button').addEventListener('click', function() {
// 	addingTask();
// 	printTodos();
// });

// console.log(todoArray);
