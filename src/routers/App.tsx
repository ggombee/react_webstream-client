import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home, HotTrack, BeatMaker, Favorites, PlayList, Cart } from '../features/Main';
import { Login } from '../features/Auth';

// import MainRouter from './main';
// import AuthRouter from './auth';

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
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hottrack" component={HotTrack} />
        <Route exact path="/beatmaker" component={BeatMaker} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/playlist" component={PlayList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/auth/login" component={Login} />

        {/* <MainRouter />
          <AuthRouter /> */}
      </Switch>
    </Router>
  );
}

export default App;
