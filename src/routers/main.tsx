import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, HotTrack, BeatMaker, Favorites, PlayList, Cart } from '../features/Main';
import { MainLayout } from '../Layout/main';

function MainRouter(): React.ReactElement {
  return (
    <MainLayout>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/hottrack" component={HotTrack} />
        <Route path="/beatmaker" component={BeatMaker} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/playlist" component={PlayList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </MainLayout>
  );
}

export default MainRouter;
