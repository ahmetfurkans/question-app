import React, { useState } from 'react';

function Etiketler({ children, question, setQuestion }) {
  const isFull = () => {
    return question.tags.length === 0 ? 'Örn: javascirpt' : '';
  };

  const [tag, setTag] = useState('');
  const setTags = e => {
    e.preventDefault();
    setQuestion({ ...question, tags: [...question.tags, tag] });
    setTag('');
  };
  return (
    <div className="inputBox-etiketler">
      <div className="labels">
        <span className="label">Etiketler</span>
        <span className="explainer">
          Sorunuzun ne hakkında olduğunu açıklamak için en fazla 3 etiket .
        </span>
      </div>
      <div className="etiketBox">
        {children}

        {question.tags.length < 3 ? (
          <>
            <input
              className="input"
              value={tag}
              maxLength={10}
              onChange={e => setTag(e.target.value)}
              placeholder={isFull()}
            />
            <button type="button" className="add-tag-btn" onClick={setTags}>
              add
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Etiketler;
