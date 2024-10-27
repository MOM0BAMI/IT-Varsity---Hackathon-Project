import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false); // State to manage button disabling

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const fetchChatbotResponse = async (message) => {
    setLoading(true);
    setError(''); // Clear previous errors

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
        }),
      });

      // Check for errors in the response
      if (!response.ok) {
        if (response.status === 429) {
          // Rate limit hit, set an error message
          setError('Rate limit reached. Please try again later.');
        } else {
          throw new Error('Network response was not ok');
        }
        return;
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      setError('Failed to fetch response from chatbot.');
      console.error('Error fetching chatbot response:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitDisabled || userMessage.trim() === '') return; // Prevent submission if disabled or input is empty

    setSubmitDisabled(true); // Disable button when submitting
    const response = await fetchChatbotResponse(userMessage);
    if (response) {
      setChatbotResponse(response);
      setUserMessage(''); // Clear the input field after sending
    }
    // Re-enable the button after a cooldown period
    setTimeout(() => setSubmitDisabled(false), 3000); // 3 seconds cooldown
  };

  return (
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userMessage} 
          onChange={(e) => setUserMessage(e.target.value)} 
          placeholder="Type your message..." 
        />
        <button type="submit" disabled={loading || submitDisabled}>Send</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p className="chatbot-response">Chatbot Response: {chatbotResponse}</p>
    </div>
  );
};

export default Chatbot;
