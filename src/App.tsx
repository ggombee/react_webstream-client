import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '~/pages/Home'
import Auth from '~/pages/Auth'
import HotTrack from '~/pages/HotTrack'
import BeatMaker from './pages/BeatMaker'
import Favorites from './pages/Favorites'
import Playlist from './pages/Playlist'
import LayoutRoute from './components/LayoutRoutes'
import Default from '~/layouts/Default'
import Blank from './layouts/Blank'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Switch>
        <LayoutRoute exact path="/" layout={Default} component={Home} />
        <LayoutRoute exact path="/auth/login" layout={Blank} component={Auth} />
        <LayoutRoute path="/auth/terms" layout={Blank} component={Auth} />
        <LayoutRoute path="/auth/register" layout={Blank} component={Auth} />

        <LayoutRoute
          exact
          path="/hottrack"
          layout={Default}
          component={HotTrack}
        />
        <LayoutRoute
          exact
          path="/beat"
          layout={Default}
          component={BeatMaker}
        />
        <LayoutRoute
          exact
          path="/favorites"
          layout={Default}
          component={Favorites}
        />
        <LayoutRoute
          exact
          path="/playlist"
          layout={Default}
          component={Playlist}
        />
      </Switch>
    </Router>
  )
}

export default App
