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
            <button onclick="selectRow(${row.id})">Update</button>
            <button onclick="deleteRow(${row.id})">Delete</button>
          </td>
        `
        tableBody.appendChild(tableRow);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

function selectRow(id) {
  window.location.href = `/users/updateUser?id=${id}`;
}

async function updateInfo() {

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;

  try {
      const response = await fetch(`/users/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              firstname: fname,
              lastname: lname
          })
      });
      const result = await response.json();
      if (result.success) {
          alert('User updated successfully');
          window.location.href = `/`
          // Optionally, update the UI or reload data
      } else {
          alert('Error updating user');
      }

  } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user');
  }

}

async function deleteRow(id){
  try {

    const response = await fetch(`/users/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();

    if (result.success) {
        window.location.href = `/`
        console.log('success');
    } else {
        alert('Error deleting user');
    }
} catch (error) {
    console.error('Error deleting user:', error);
    alert('Error deleting user');
}
}


