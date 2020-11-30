import axios from 'axios';

class IronBeersService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_IRONBEERS_API}`,
    });
    this.service = service;
  }
  getAll() {
    //same thing -> axios.get("http://localhost:5000/characters")
    return this.service.get('/');
  }

  getBeer(id) {
    //same thing -> axios.get("http://localhost:5000/characters/1")
    return this.service.get(`/${id}`);
  }

  getRandomBeer() {
    return this.service.get('/random');
  }

  addBeer(beer) {
    //same thing -> axios.post("http://localhost:5000/characters/", {name: "miguel"})
    return this.service.post('/new', beer);
  }
}

export default IronBeersService;
