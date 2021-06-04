import '../../styles/create-question.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CreateQuestion() {
  const { user } = useSelector(state => ({
    ...state.authReducer,
  }));

  return (
    <div className="create-question">
      <h3>Takıldığın yerde yardım almak artık çok kolay</h3>
      <Link
        to={user ? '/create-question' : '/register'}
        style={{ textDecoration: 'none' }}
        className="bg-green"
      >
        Soru Oluştur
      </Link>
    </div>
  );
}

export default CreateQuestion;
