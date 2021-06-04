import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import * as API from '../../../api/index';
import { useSelector } from 'react-redux';

function PostInfo({ createdAt, creator, id }) {
  const { user } = useSelector(state => ({
    ...state.authReducer,
  }));
  const history = useHistory();

  const [owner, setOwner] = useState(false);

  useEffect(() => {
    if (user !== null) {
      if (user._id === creator._id) {
        setOwner(true);
      }
    }
  }, [user, creator._id]);

  const [modal, setModal] = useState(false);
  const deleteQuestion = async () => {
    await API.deletePost(id);
    history.push('/');
  };
  return (
    <div className="topSection">
      <div>
        <div className="ownerAvatar"></div>
        <span className="ownerName">{creator.username}</span>
      </div>
      <span className="extraInfoContainer">
        <time className="extraInfo">{moment(createdAt).fromNow()}</time>
      </span>

      {owner ? (
        modal ? (
          <>
            <div
              className="post-crud-button crud"
              onMouseOut={() =>
                setTimeout(() => {
                  setModal(!modal);
                }, 2000)
              }
            >
              <button
                className="button-delete"
                type="button"
                onClick={deleteQuestion}
              >
                <h4>Delete</h4>
              </button>
              <Link className="button-update" to={`/create-question/${id}`}>
                <h4>Update</h4>
              </Link>
            </div>
          </>
        ) : (
          <button
            className="post-crud-button"
            type="button"
            onMouseOver={() => {
              setModal(!modal);
            }}
          >
            <i className="fas fa-ellipsis-h"></i>
          </button>
        )
      ) : null}
    </div>
  );
}

export default PostInfo;
