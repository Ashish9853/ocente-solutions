// Login form submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple check (replace with actual authentication in a real application)
        if (username === 'admin' && password === 'password') {
            window.location.href = 'admin-panel.html';
        } else {
            alert('Invalid username or password');
        }
    });
}

// Logout functionality
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Perform logout actions (e.g., clear session)
        window.location.href = 'index.html';
    });
}

// Add new employee
const addEmployeeButton = document.getElementById('add-employee');
if (addEmployeeButton) {
    addEmployeeButton.addEventListener('click', function() {
        alert('Add new employee functionality to be implemented');
    });
}

// Edit and delete employee
const employeeTable = document.getElementById('employee-table');
if (employeeTable) {
    employeeTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit')) {
            alert('Edit employee functionality to be implemented');
        } else if (e.target.classList.contains('delete')) {
            if (confirm('Are you sure you want to delete this employee?')) {
                alert('Delete employee functionality to be implemented');
            }
        }
    });
}

// Approve and reject leave requests
const leaveTable = document.getElementById('leave-table');
if (leaveTable) {
    leaveTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('approve')) {
            alert('Leave request approved');
        } else if (e.target.classList.contains('reject')) {
            alert('Leave request rejected');
        } else if (e.target.classList.contains('view')) {
            alert('View leave request details functionality to be implemented');
        }
    });
}