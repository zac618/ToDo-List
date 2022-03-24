let todoArray = [];


document.getElementById('add_button').addEventListener('click', function() {
	let list = document.getElementById('myUL');
	let li = document.createElement("li");
	let todoInput = document.getElementById('myInput').value;
	// li.setAttribute("id", "new-li");
	li.appendChild(document.createTextNode(todoInput));
	list.appendChild(li);

	li.innerHTML +=
	`<button onclick="del(todoInput)">Del</button>`;
		
	document.getElementById('myInput').value = "";
	}



);