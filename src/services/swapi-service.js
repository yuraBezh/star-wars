import { API_BASE_URL } from '../constants/stuff';
import Converter from './converter';
import getImage from './image-getter';
import getFields from './fields-getter';

export default class SwapiService {
  baseURL = API_BASE_URL;

  constructor() {
    this.converter = new Converter();
  }

  async getData(url) {
    const response = await fetch(`${this.baseURL}${url}`);

    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}, response ${response.status}`);
    }

    return response.json();
  }

  getAllPeople = async () => {
    const data = await this.getData('/people/');
    return data.results.map(this.converter.convertPerson);
  }

  getPerson = async (id) => {
    const person = await this.getData(`/people/${id}/`);
    return this.converter.convertPerson(person);
  }

  getAllPlanets = async () => {
    const data = await this.getData('/planets/');
    return data.results.map(this.converter.convertPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getData(`/planets/${id}/`);
    return this.converter.convertPlanet(planet);
  }

  getAllStarships = async () => {
    const data = await this.getData('/starships/');
    return data.results.map(this.converter.convertStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getData(`/starships/${id}/`);
    return this.converter.convertStarship(starship);
  }

  getImageUrl = (item, type) => getImage(item.id, type)

  getFields = (type) => getFields(type)
}
