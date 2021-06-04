import React from 'react';

function Detay({ question, setQuestion }) {
  return (
    <div className="inputBox-detay">
      <div>
        <span className="label">Detay</span>
        <span className="explainer">
          Sorunuz alakalı gereken bütün detayları girin.
        </span>
      </div>
      <textarea
        className="input"
        value={question.content}
        onChange={e => setQuestion({ ...question, content: e.target.value })}
      />
    </div>
  );
}

export default Detay;
