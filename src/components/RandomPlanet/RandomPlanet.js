import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RANDOM_PLANET_INTERVAL } from '../../constants/stuff';
import { getRandomPlanet } from '../../redux/actions';
import {
  selectIsRandomPlanetLoading,
  selectRandomPlanet,
  selectRandomPlanetError
} from '../../redux/selectors';
import PlanetView from '../PlanetView';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import './RandomPlanet.css';

const RandomPlanet = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsRandomPlanetLoading);
  const randomPlanet = useSelector(selectRandomPlanet);
  const error = useSelector(selectRandomPlanetError);

  useEffect(() => {
    dispatch(getRandomPlanet());

    const timer = setInterval(() => {
      dispatch(getRandomPlanet());
    }, RANDOM_PLANET_INTERVAL);

    return () => { clearInterval(timer); };
  }, [dispatch]);

  return (
    <div className="jumbotron d-flex hero bg-light list-group-flush">
      { isLoading && <Spinner /> }
      { randomPlanet && <PlanetView planet={randomPlanet} /> }
      { error && <ErrorIndicator /> }
    </div>
  );
};

export default RandomPlanet;
