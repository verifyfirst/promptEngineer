import React, { useState } from 'react';
import axios from 'axios';

const PromptForm = () => {
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/prompt', { task });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter your task:</label>
      <input type="text" id="task" value={task} onChange={handleTaskChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PromptForm;
