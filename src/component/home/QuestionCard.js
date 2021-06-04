import React from 'react';
import Tags from './Tags';
import { Link } from 'react-router-dom';
import moment from 'moment';

function QuestionCard({ post }) {
  return (
    <>
      <Link
        to={`question-detail/${post._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="card">
          <h1>{`${post.title.slice(0, 40)}...`}</h1>
          <div className="card-content">
            <div className="tags">
              {post.tags &&
                post.tags.map(tag => (
                  <Tags color="232a34" key={tag} name={tag} />
                ))}
            </div>
            <i className="fas fa-thumbs-up"></i>
            <div className="card-info">
              <h4>{moment(post.createdAt).fromNow()}</h4>
              <h4>{`${post.comments} cevap`}</h4>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default QuestionCard;
