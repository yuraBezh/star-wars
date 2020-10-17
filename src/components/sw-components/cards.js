import CreatureCard from '../CreatureCard';
import { withCardDataFetching } from '../../hocs';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getImageUrl,
  getFields,
} = swapiService;

const PersonCard = withCardDataFetching(CreatureCard, getPerson, getImageUrl, getFields);
const PlanetCard = withCardDataFetching(CreatureCard, getPlanet, getImageUrl, getFields);
const StarshipCard = withCardDataFetching(CreatureCard, getStarship, getImageUrl, getFields);

export {
  PersonCard,
  PlanetCard,
  StarshipCard,
};
