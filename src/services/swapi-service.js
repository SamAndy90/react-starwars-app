export default class SwapiService {
    _baseUrl = 'https://swapi.dev/api/';
    _imageUrl = 'https://starwars-visualguide.com/assets/img';

    async getResourse(url) {
        const res = await fetch(`${this._baseUrl}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} recieved ${res.status}`)
        }
        const info = await res.json();
        return info
    }

    getAllPeople = async () => {
        const res = await this.getResourse('/people/');
        return res.results.map(this._transformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    }
    getAllPlanets = async () => {
        const res = await this.getResourse('/planets/');
        return res.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }
    getAllStarships = async () => {
        const res = await this.getResourse('/starships/');
        return res.results.map(this._transformStarship);
    }
    getStarship = async (id) => {
        const starship = await this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getPersonImage = ({id}) => {
        return `${this._imageUrl}/characters/${id}.jpg`
    }    
    
    getPlanetImage = ({id}) => {
        return `${this._imageUrl}/planets/${id}.jpg`
    }    
    
    getStarshipImage = ({id}) => {
        return `${this._imageUrl}/starships/${id}.jpg`
    }


    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }



    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCepacity: starship.cargo_cepacity,
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }
}