import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PromptList = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/prompt');
      setPrompts(response.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {prompts.map((prompt) => (
        <li key={prompt._id}>
          <div>{prompt.task}</div>
          <div>{prompt.rating}</div>
          <div>{prompt.date}</div>
        </li>
      ))}
    </ul>
  );
};

export default PromptList;
