

document.getElementById('add_button').addEventListener('click', addItem);
document.getElementById('myInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addItem();
    }
});


function addItem() {
	// Get the list
	let list = document.getElementById('myUL');
	let input = document.getElementById('myInput');
	
	// Create delete button with li
	let deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "dltBtn");
	deleteButton.innerText = "Delete";

	// Create Edit button with li
	let editButton = document.createElement("button");
	editButton.setAttribute("class", "editBtn");
	editButton.innerText = "Edit";

	// Declare variable to use 
	let li = document.createElement("li");

	
	// For loop to go through list of items
	//for (let i = 0; i < todoArray.length; i++);

		// Append the added word
		const text = document.createElement("p")
		text.innerText = input.value;
		li.appendChild(text);
		
		// Reset input box to be blank after adding item
		input.value = "";

		// Add to list
		list.appendChild(li);
		li.appendChild(deleteButton).addEventListener("click", removeItem);
		li.appendChild(editButton).addEventListener("click", editItem);

}

// Delete Item
function removeItem(event) {
	event.target.parentElement.remove()
}

// Edit Item
function editItem(event) {
	let updatedItem = prompt('What would you like this to say?');
	let $li = event.target.parentElement
	if (updatedItem) {
		$li.querySelector('p').innerText = updatedItem;
	}
	console.log(updatedItem)
	
}