import React from 'react';
import { useSelector } from 'react-redux';
import CommentInfo from './CommentInfo';
import { likeComment, deleteLike } from '../../../api/index';
import { tokenConfig } from '../../../actions/authActions';

function AnswerPlace({ comment }) {
  const arr = comment.msg.split('--kod--');
  const { user, token } = useSelector(state => ({
    ...state.authReducer,
  }));

  const like = async () => {
    await likeComment(comment._id, tokenConfig(token));
    window.location.reload();
  };
  const disLike = async () => {
    await deleteLike(comment._id, tokenConfig(token));
    window.location.reload();
  };

  const Likes = () => {
    if (comment.likes.length > 0) {
      return comment.likes.find(like => like === user?._id) ? (
        <i
          className="fas fa-heart"
          onClick={disLike}
          style={{ color: 'red' }}
        ></i>
      ) : (
        [
          user ? (
            <i className="far fa-heart" onClick={like}></i>
          ) : (
            <i className="far fa-heart"></i>
          ),
        ]
      );
    }
    if (comment.likes.length === 0) {
      return <i className="far fa-heart" onClick={like}></i>;
    }
    return <i className="far fa-heart"></i>;
  };

  return (
    <div className="answerArea">
      <CommentInfo
        id={comment._id}
        createdAt={comment.createdAt}
        creator={comment.creator}
      />

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
      <Likes />
      <h4>{comment.likes.length || 0}</h4>
    </div>
  );
}

export default AnswerPlace;
