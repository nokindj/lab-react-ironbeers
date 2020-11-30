import React from 'react';
import IronBeersService from '../utils/api';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';

class BeerDetails extends React.Component {
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
    const ironbeersService = new IronBeersService();
    const values = queryString.parse(this.props.location.search);
    console.log(values);

    let id = this.props.match.params.id;
    ironbeersService.getBeer(id).then((response) => {
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

export default withRouter(BeerDetails);
