import { useState } from 'react';
import Tags from './Tags';
import '../../styles/populartags.scss';

function PopularTags() {
  const [tags] = useState(['Python', 'Web', 'Android', 'Ios']);

  return (
    <>
      <div className="popular-tags">
        <div className="title">
          <h1>Popüler Tagler</h1>
        </div>
        <div className="container">
          {tags.map((tag, index) => (
            <Tags key={index} name={tag} color="232a34" />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularTags;
