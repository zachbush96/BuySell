import React, { useState } from 'react';

function UserStatusSwitch() {
  const [status, setStatus] = useState('buying');

  function handleChange(e) {
    setStatus(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect to the backend API to update the user's status
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          name="status"
          value="buying"
          checked={status === 'buying'}
          onChange={handleChange}
        />
        Buying
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="selling"
          checked={status === 'selling'}
          onChange={handleChange}
        />
        Selling
      </label>
      <button type="submit">Update Status</button>
    </form>
  );
}

export default UserStatusSwitch;
