import React from 'react';

function Title({ children, question, setQuestion }) {
  return (
    <div className="inputBox-title">
      <div>
        <span className="label">Başlık</span>
        <span className="explainer">
          Soru kalıbında problemi kısaca anlatın.
        </span>
      </div>
      <input
        className="input"
        placeholder={children}
        value={question.title}
        onChange={e => setQuestion({ ...question, title: e.target.value })}
      ></input>
    </div>
  );
}

export default Title;
