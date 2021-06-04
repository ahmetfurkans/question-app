import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import CreateQuestion from './component/createquestion/CreateQuestion';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Profile from './component/profile/Profile';
import QuestionDetail from './component/questionDetail/QuestionDetail';
import { loadUser } from './actions/authActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //direk fonksiyonu çağırırsan fonksiyon çalışır ama store la bağlantı kurmaz
    dispatch(loadUser());
  });

  //Searching properties
  const [searchProp, setSearchProp] = useState('');

  return (
    <BrowserRouter>
      <Navbar searchProp={searchProp} setSearchProp={setSearchProp} />
      <Switch>
        <Route path="/create-question" component={CreateQuestion} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/profile"
          exact
          render={() => <Profile searchProp={searchProp} />}
        />
        <Route path="/question-detail/:id" exact component={QuestionDetail} />
        <Route path="/" exact render={() => <Home searchProp={searchProp} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
