import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

class RandomBeer extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    firstBrewed: '',
    attenuationLevel: '',
    description: '',
    contributedBy: '',
  };

  componentDidMount() {
    console.log('DID MOUNT');

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);
        this.setState({
          image: response.data.image_url,
          name: response.data.name,
          tagline: response.data.tagline,
          firstBrewed: response.data.first_brewed,
          attenuationLevel: response.data.attenuation_level,
          description: response.data.description,
          contributedBy: response.data.contributed_by,
        });
      });
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <div className="container">
          <img src={this.state.image} alt="beer" />
          <h1>{this.state.name}</h1>
          <h3>{this.state.tagline}</h3>
          <p>{this.state.attenuationLevel}</p>
          <p>{this.state.firstBrewed}</p>
          <p>{this.state.description}</p>
          <p>{this.state.contributedBy}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
