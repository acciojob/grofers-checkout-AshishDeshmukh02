const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

	const getSum = () => {
//Add your code here
  // Get all the prices from the HTML table
  const prices = document.querySelectorAll('.price');

  // Initialize a variable to store the total price
  let totalPrice = 0;

  // Loop through each price and add it to the total price
  for (let i = 0; i < prices.length; i++) {
    totalPrice += parseFloat(prices[i].textContent);
  }

  // Create a new row to display the total price
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
  newRow.appendChild(totalCell);

  // Add the new row to the table
  const table = document.querySelector('table');
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

