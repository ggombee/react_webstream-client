import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import MainPage from '../pages/Main'
import MainRouter from './main';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*
 * TODO
 * 1. Main
 *   1) Layout (Menu 클릭시 컨테이너 변경)
 *   2) Contatiner
 * 2. Auth
 *   1) Layout (뒤로가기 클릭시 메인으로 이동)
 *   2) Contatiner
 *   3) 연동 로그인
 */

function App(): React.ReactElement {
  return (
    <Router>
      <Suspense fallback={<div>Loading.s..</div>}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <MainRouter />
          {/* <Route exact path="/auth" component={AuthPage}/> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
