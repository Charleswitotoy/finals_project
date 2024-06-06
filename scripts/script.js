document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/users/load');
      const data = await response.json();
      const tableBody = document.getElementById('tbody');
  
      data.forEach(row => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
          <td>${row.id}</td>
          <td>${row.first_name}</td>
          <td>${row.last_name}</td>
          <td>
            <button onclick="selectRow(this)">Update</button>
            <button onclick="deleteRow(this)">Delete</button>
          </td>
        `
        tableBody.appendChild(tableRow);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

const radioButtons = document.querySelectorAll('input[type="radio"]');
const selectedData = document.getElementById('selectedData');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', (event) => {
      if (event.target.checked) {
        const selectedValue = event.target.value;
        selectedData.textContent = `Selected Row: ${selectedValue}`;
      } else {
        selectedData.textContent = '';
      }
    });
  });

function selectRow(buttonElement) {
    // Redirect to the update page
    window.location.href = "updateUser.html";
}

document.deleteRow(async () => {
  try {
    const response = await fetch('/users/updateUser');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


