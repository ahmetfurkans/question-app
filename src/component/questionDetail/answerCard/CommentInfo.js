/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import * as API from '../../../api/index';
import { useSelector } from 'react-redux';

function PostInfo({ createdAt, creator, id }) {
  const { user } = useSelector(state => ({
    ...state.authReducer,
  }));

  const [owner, setOwner] = useState(false);

  useEffect(() => {
    if (user !== null) {
      if (user._id === creator._id) {
        setOwner(true);
      }
    }
  }, [user]);

  const [modal, setModal] = useState(false);

  const deleteComment = async () => {
    await API.deleteComment(id);
    window.location.reload();
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
              style={{ marginRight: '20px' }}
              onMouseOut={() =>
                setTimeout(() => {
                  setModal(!modal);
                }, 2000)
              }
            >
              <button
                className="button-delete"
                type="button"
                onClick={deleteComment}
              >
                <h4>Delete</h4>
              </button>
            </div>
          </>
        ) : (
          <button
            className="post-crud-button"
            style={{ marginRight: '20px' }}
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
