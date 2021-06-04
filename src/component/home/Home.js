import React, { useState, useEffect } from 'react';
import Content from './Content';
import '../../styles/home.scss';
import '../../styles/questiondetail.scss';
import QuestionCard from './QuestionCard';
import PopularTags from './PopularTags';
import CreateQuestion from './CreateQuestion';
import Information from './Information';
import Loading from '../Loading';
import { getPosts } from '../../api/index';
import Pagination from '../Pagination';
import CantFind from './CantFind';

function Home({ searchProp }) {
  const [isLoading, setisLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    setisLoading(true);
    setPosts([]);
    getPosts(pageNumber, searchProp).then(res => {
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
    //Math Max 0 dan aşşağıya gitmesin diye
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className="big">
      <div className="container-home">
        <div className="left">
          <div className="responsive">
            <Information />
          </div>
          <CreateQuestion />
          <PopularTags />
        </div>
        <div className="middle">
          <Content>
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
          </Content>
        </div>
        <div className="right">
          <Information />
        </div>
      </div>
    </div>
  );
}

export default Home;
