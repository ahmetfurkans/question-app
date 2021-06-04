import React from 'react';
import Tags from '../../home/Tags';
import PostInfo from './PostInfo';

export default function QuestionPlace({
  title,
  tags,
  content,
  createdAt,
  creator,
  id,
}) {
  const arr = content.split('--kod--');
  return (
    <div className="questionArea">
      <div className="topSectionContainer">
        <PostInfo createdAt={createdAt} creator={creator} id={id}></PostInfo>
        <h1 className="questionTitle">{title}</h1>
      </div>

      <div className="content">
        {arr.map((item, index) => {
          if (arr.length > 0) {
            if (index % 2 !== 0) {
              return (
                <div className="code-section" key={index}>
                  <pre className="text-area">{arr[index]}</pre>
                </div>
              );
            } else {
              return <h2 key={index}>{arr[index]}</h2>;
            }
          } else {
            return <h1>sa</h1>;
          }
        })}
        <div className="tagsContainer">
          {tags.map((tag, index) => (
            <Tags key={index} name={tag} color="232a34" />
          ))}
        </div>
      </div>
    </div>
  );
}
