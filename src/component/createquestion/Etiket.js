import React from 'react';

function Etiket({ children, setQuestion, question }) {
  const deleteTag = () => {
    const filteredTags = question.tags.filter(tag => tag !== children);
    setQuestion({ ...question, tags: filteredTags });
  };
  return (
    <div className="etiket">
      <span>{children}</span>
      <i className="fas fa-times" onClick={deleteTag}></i>
    </div>
  );
}

export default Etiket;
