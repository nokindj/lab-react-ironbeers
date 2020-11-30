import React from 'react';
import IronBeersService from '../utils/api';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

class IronBeersList extends React.Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    const ironbeersService = new IronBeersService();
    ironbeersService.getAll().then((response) => {
      console.log(response);
      this.setState({
        allBeers: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            {this.state.allBeers.map((beer, index) => {
              return (
                <div key={index}>
                  <Link to={`/beers/${beer._id}`}>
                    <h1>{beer.name}</h1>
                  </Link>
                  <h3 color="light grey">{beer.tagline}</h3>
                  <p>
                    <b>Created by:</b>
                    {beer.contributed_by}
                  </p>
                  <div>
                    <img src={beer.image_url} alt="beerImage" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default IronBeersList;
