import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import ROUTES from '../../constants/routes';
import store from '../../redux/store';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorBoundary from '../ErrorBoundary';

import { StarshipCard } from '../sw-components';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <div className="container">
          <Header />
          <RandomPlanet />
          <Switch>
            <Route exact path={ROUTES.ROOT} render={() => <h2>Welcome to StarDB</h2>} />
            <Route path={ROUTES.PEOPLE} component={PeoplePage} />
            <Route path={ROUTES.PLANETS} component={PlanetsPage} />
            <Route exact path={ROUTES.STARSHIP} component={StarshipsPage} />
            <Route
              path={ROUTES.STARSHIP_DETAILS}
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipCard dataId={id} type="starship" />;
              }}
            />
            <Route render={() => <h2>Page not found</h2>} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default App;
