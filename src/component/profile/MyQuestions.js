import React, { useContext, useEffect, useState } from 'react';
import { ReactReduxContext } from 'react-redux';
import { getUserPosts } from '../../api';
import { tokenConfig } from '../../actions/authActions';
import Content from '../home/Content';
import Loading from '../Loading';
import QuestionCard from '../home/QuestionCard';
import Pagination from '../Pagination';
import CantFind from '../home/CantFind';
function MyQuestions({ searchProp }) {
  const { store } = useContext(ReactReduxContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    setisLoading(true);
    setPosts([]);
    const token = store.getState().authReducer.token;
    console.log(searchProp);
    getUserPosts(pageNumber, tokenConfig(token), searchProp).then(res => {
      if (res.posts.length > 0) {
        setPosts(res.posts);
        setNumberOfPages(res.pages);
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    });
  }, [pageNumber, searchProp]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <Content>
      <div className="container-profile-content">
        {isLoading ? (
          <Loading />
        ) : (
          [
            posts.length !== 0 ? (
              <>
                {posts.map(post => (
                  <QuestionCard key={post._id} post={post} />
                ))}
                <Pagination
                  pageNumber={pageNumber}
                  pages={pages}
                  gotoNext={gotoNext}
                  gotoPrevious={gotoPrevious}
                  setPageNumber={setPageNumber}
                />
              </>
            ) : (
              <CantFind searchProp={searchProp} key={searchProp} />
            ),
          ]
        )}
      </div>
    </Content>
  );
}

export default MyQuestions;
