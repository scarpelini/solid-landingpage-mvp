import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { changeLanguage, changeTheme } from 'redux/modules/settings/actions';
import { getLanguage, getTheme } from 'redux/modules/settings/selectors';
import { Header, A } from 'components';
import { Home, About } from 'pages';

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const currentTheme = useSelector(getTheme);
  const nextLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR';
  const nextTheme = currentTheme === 'light' ? 'Dark' : 'Light';
  return (
    <Router>
      <Header>
        <A onClick={() => dispatch(changeLanguage(nextLanguage))}>
          {nextLanguage}
        </A>
        <A onClick={() => dispatch(changeTheme(nextTheme.toLowerCase()))}>
          {nextTheme}
        </A>
      </Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
