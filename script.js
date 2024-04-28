// Class to represent a Registrant
class Registrant {
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const money = parseInt(document.getElementById('money').value);

    // Validate form inputs
    if (name.length < 10 || age < 25 || money >= 100000 && money > 1000000) {
        alert('Invalid input! Please check the form criteria.');
        return;
    }

    // Create a new Registrant instance
    const registrant = new Registrant(name, age, money);

    // Store the registrant data (e.g., in an array or localStorage)
    // For simplicity, let's log the registrant data
    console.log('Registrant:', registrant);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('money').value = '';

    // Optionally, update the registrant list table
    updateRegistrantList(registrant);
}

// Function to update the registrant list table
function updateRegistrantList(registrant) {
    const tableBody = document.getElementById('registrantTableBody');
    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${registrant.name}</td>
        <td>${registrant.age}</td>
        <td>${registrant.money}</td>
    `;
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();
});
