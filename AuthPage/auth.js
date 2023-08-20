document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;
        const users = getUsersFromJson();
        
        const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
        
        if (user) {
            alert('Login successful');
        } else {
            alert('Invalid username or password');
        }
    });
    
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const signupUsername = document.getElementById('signupUsername').value;
        const signupPassword = document.getElementById('signupPassword').value;
        
        if (!validateInput(signupUsername, signupPassword)) {
            alert('Invalid input');
            return;
        }
        
        const newUser = { username: signupUsername, password: signupPassword };
        const users = getUsersFromJson();
        
        if (isUsernameTaken(users, signupUsername)) {
            alert('Username already taken');
            return;
        }
        
        users.push(newUser);
        saveUsersToJson(users);
        
        alert('Signup successful');
    });
    
    function getUsersFromJson() {
        const jsonData = localStorage.getItem('data');
        const data = JSON.parse(jsonData) || { users: [
            {
                "username": "hvgupta17",
                "password": "harshit@123"
            },
            {
                "username": "test_user",
                "password": "test@pwd"
            },
            {
                "username": "test_user2",
                "password": "hvg@12345"
            }
        ] };
        return data.users;
    }
    
    function saveUsersToJson(users) {
        const data = { users: users };
        localStorage.setItem('data', JSON.stringify(data));
    }
    
    function validateInput(username, password) {
        // Add your validation logic here
        return username.length >= 3 && password.length >= 6;
    }
    
    function isUsernameTaken(users, username) {
        return users.some(u => u.username === username);
    }
});
