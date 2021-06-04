import React, { useContext, useEffect, useState } from 'react';
import '../../styles/profile.scss';
import { getUserPosts, getUserComments } from '../../api';
import { ReactReduxContext } from 'react-redux';
import { tokenConfig } from '../../actions/authActions';
import PersonalInformation from './PersonalInformation';
import RightPageLinks from './RightPageLinks';
import MyQuestions from './MyQuestions';

function Profile({ searchProp }) {
  const { store } = useContext(ReactReduxContext);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = store.getState().authReducer.token;
    async function fetchData() {
      const comments = await getUserComments(tokenConfig(token));

      setComments(comments);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RightPages = () => {
    if (page === 1) {
      return (
        <div className="right">
          <PersonalInformation />
        </div>
      );
    }
    if (page === 2) {
      return <MyQuestions searchProp={searchProp} />;
    }
    return null;
  };

  return (
    <div className="big">
      <div className="container-profile">
        <div className="left">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profil"
            />
            <h2>gslifs</h2>
          </div>
          <div className="bottom">
            <RightPageLinks page={page} setPage={setPage} />
          </div>
        </div>

        <RightPages />
      </div>
    </div>
  );
}

export default Profile;
