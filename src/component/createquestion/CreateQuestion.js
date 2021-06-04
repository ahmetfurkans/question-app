import React, { useContext, useEffect, useState } from 'react';
import '../../styles/createquestion.scss';
import { createPost, getPost, updatePost } from '../../api/index';
import Detay from './Detay';
import Etiket from './Etiket';
import Etiketler from './Etiketler';
import InfoBox from './InfoBox';
import Title from './Title';
import { ReactReduxContext } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { tokenConfig } from '../../actions/authActions';
import Loading from '../Loading';

function CreateQuestion(params) {
  const { store } = useContext(ReactReduxContext);
  const history = useHistory();

  const initialState = {
    title: '',
    content: '',
    tags: [],
  };

  const [question, setQuestion] = useState(initialState);
  const urlarr = params.history.location.pathname.split('/');
  const [postId, setPostId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //if urlarr length > 2 it is a update page
    if (urlarr.length > 2) {
      setPostId(urlarr[2]);
      setLoading(true);
      async function fetchData() {
        const { data } = await getPost(postId);
        setQuestion({
          title: data.title,
          content: data.content,
          tags: data.tags,
        });
        setLoading(false);
      }
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const formSubmit = async e => {
    e.preventDefault();
    const token = store.getState().authReducer.token;
    //if urlarr length > 2 it is a update page
    if (urlarr.length > 2) {
      await updatePost(postId, question);
      history.push('/');
    } else {
      await createPost(question, tokenConfig(token));
      history.push('/');
    }
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            marginTop: '100px',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Loading />
        </div>
      ) : (
        <form className="main" onSubmit={formSubmit}>
          <div className="container-create-question">
            <>
              <Title question={question} setQuestion={setQuestion}>
                Örn: for kullanmadan bir dizinin elemanlarına nasıl ulaşırım ?
              </Title>
              <Detay question={question} setQuestion={setQuestion} />
              <Etiketler question={question} setQuestion={setQuestion}>
                {question.tags &&
                  question.tags.map((tag, index) => (
                    <Etiket
                      key={index}
                      question={question}
                      setQuestion={setQuestion}
                    >
                      {tag}
                    </Etiket>
                  ))}
              </Etiketler>
              <button className="navButton" type="submit">
                Paylaş
              </button>
            </>
          </div>
          <InfoBox />
        </form>
      )}
    </>
  );
}

export default CreateQuestion;
