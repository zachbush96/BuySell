import React, { useState } from 'react';

function UserRegistrationForm() {
  const [username, setUsername] = useState('');

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect to the backend API to register the user
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistrationForm;
