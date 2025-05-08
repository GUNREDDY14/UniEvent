async function login() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const role = document.getElementById('role');

  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');
  const roleError = document.getElementById('role-error');

  let hasError = false;

  // Clear previous messages
  usernameError.textContent = '';
  passwordError.textContent = '';
  roleError.textContent = '';

  username.classList.remove('input-error');
  password.classList.remove('input-error');
  role.classList.remove('input-error');

  // Basic validation
  if (username.value.trim() === '') {
    usernameError.textContent = 'Please enter your username.';
    username.classList.add('input-error');
    hasError = true;
  }

  if (password.value.trim() === '') {
    passwordError.textContent = 'Please enter your password.';
    password.classList.add('input-error');
    hasError = true;
  }

  if (role.value === '') {
    roleError.textContent = 'Please select your role.';
    role.classList.add('input-error');
    hasError = true;
  }

  if (hasError) return;

  // Make API request to backend
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value.trim()
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      passwordError.textContent = errorData.message || 'Login failed';
      return;
    }

    const user = await response.json();

    // Check if the role matches the expected value from the backend
    if (user.role !== role.value) {
      alert('Role mismatch. Please check your credentials.');
      return;
    }

    // Store user data in localStorage for session persistence
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect based on the role after successful login
    switch (user.role) {
      case 'student':
        window.location.href = 'student.html';
        break;
      case 'club_head':
        window.location.href = 'club.html';
        break;
      case 'faculty':
        window.location.href = 'faculty.html';
        break;
      case 'management':
        window.location.href = 'management.html';
        break;
      default:
        alert('Unknown role');
    }

  } catch (error) {
    console.error('Login error:', error);
    passwordError.textContent = 'Server error. Try again later.';
  }
}
