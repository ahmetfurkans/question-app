import React, { useEffect, useState } from 'react';
import Content from '../home/Content';
import CreateQuestion from '../home/CreateQuestion';
import Information from '../home/Information';
import PopularTags from '../home/PopularTags';
import QuestionPlace from './questionCard.js/questionPlace';
import '../../styles/home.scss';
import AnswerPlace from './answerCard/AnswerPlace';
import YourAnswer from './yourAnswer';
import { getPost, getPostComments } from '../../api/index';
import Loading from '../Loading';

function QuestionDetail({ match }) {
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const id = match.params.id;
      const { data } = await getPostComments(id);
      setComments(data);
    }
    async function fetchQuestion() {
      const id = match.params.id;
      const { data } = await getPost(id);
      setQuestion(data);
    }
    fetchComments();
    fetchQuestion();
  }, [match.params.id]);

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
            {question === null ? (
              <Loading />
            ) : (
              <>
                <QuestionPlace
                  id={match.params.id}
                  title={question.title}
                  tags={question.tags}
                  content={question.content}
                  creator={question.creator}
                  createdAt={question.createdAt}
                />
                {comments.length !== 0 ? (
                  <>
                    {comments.map(comment => (
                      <AnswerPlace key={comment._id} comment={comment} />
                    ))}
                  </>
                ) : null}

                <YourAnswer questionId={match.params.id} />
              </>
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

export default QuestionDetail;
