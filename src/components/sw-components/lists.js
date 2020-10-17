import ItemsList from '../ItemsList';
import { withListDataFetching } from '../../hocs';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const PeopleList = withListDataFetching(ItemsList, getAllPeople);
const PlanetsList = withListDataFetching(ItemsList, getAllPlanets);
const StarshipsList = withListDataFetching(ItemsList, getAllStarships);

export {
  PeopleList,
  PlanetsList,
  StarshipsList,
};
