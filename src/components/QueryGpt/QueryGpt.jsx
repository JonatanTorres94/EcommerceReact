import React, { useState } from 'react';

const QueryGpt = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        prompt: `Mi mensaje de entrada es: ${inputMessage}`,
        max_tokens: 100
      })
    });

    

    const data = await response.json();
    const answer = data.choices[0].text.trim();

    setMessages([...messages, { text: inputMessage, isUser: true }]);
    setMessages([...messages, { text: answer, isUser: false }]);
    setInputMessage('');
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div>
      <div style={{ height: '300px', border: '1px solid black', padding: '10px',margin: '20px', overflow: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {message.isUser ? (
              <div>
                <strong>Tú:</strong> {message.text}
              </div>
            ) : (
              <div>
                <strong>Bot:</strong> {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <input type="text" value={inputMessage} onChange={handleInputChange} style={{height:'40px',border: '2px solid black', padding: '10px', margin:'10px'}}/>
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
};

export default QueryGpt;
