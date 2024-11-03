let inventory = [];

// Function to display items in the inventory
function displayInventory() {
  const tableBody = document.getElementById('inventory-table-body');
  tableBody.innerHTML = ''; // Clear existing content

  inventory.forEach((item, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td>
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to add a new item
document.getElementById('add-item-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = document.getElementById('item-name').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = parseFloat(document.getElementById('price').value);

  inventory.push({ name: itemName, quantity, price });
  displayInventory();

  // Clear input fields
  document.getElementById('add-item-form').reset();
});

// Function to edit an existing item
function editItem(index) {
  const item = inventory[index];
  const newName = prompt("Edit Item Name:", item.name);
  const newQuantity = prompt("Edit Quantity:", item.quantity);
  const newPrice = prompt("Edit Price:", item.price);

  if (newName && newQuantity && newPrice) {
    inventory[index] = {
      name: newName,
      quantity: parseInt(newQuantity),
      price: parseFloat(newPrice)
    };
    displayInventory();
  }
}

// Function to delete an item
function deleteItem(index) {
  inventory.splice(index, 1);
  displayInventory();
}

// Initial call to display inventory
displayInventory();