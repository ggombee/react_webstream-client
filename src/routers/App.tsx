import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/Main'

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

function App(): React.ReactElement {
  return (
    <Router>
    <Suspense fallback={<div>Loading.s..</div>}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        {/* <Route path="/auth" component={Auth}/> */}
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
