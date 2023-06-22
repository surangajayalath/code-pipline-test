<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
</head>
<body>
  <h1>Login</h1>
  <form id="loginForm">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simulate API call for authentication
      authenticateUser(username, password);
    });

    function authenticateUser(username, password) {
      if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        // Redirect to home page
        window.location.href = '/home.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }

    // BUG: Password is logged to the console, potentially exposing sensitive information
    console.log('Password: ' + document.getElementById('password').value);
  </script>
</body>
</html>





<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
</head>
<body>
  <h1>Login</h1>
  <form id="loginForm">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // BUG: Insecure authentication logic without proper encryption or hashing
      if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        // BUG: Incorrect redirect URL, leading to a non-existent page
        window.location.href = '/home.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });

    // BUG: Password is logged to the console, potentially exposing sensitive information
    console.log('Password: ' + document.getElementById('password').value);
  </script>
</body>
</html>

