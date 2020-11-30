import React from 'react';
import { withRouter } from 'react-router-dom';
import IronBeersService from '../utils/api';
import Navbar from '../components/Navbar';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: '',
    contributedBy: '',
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;
    if (type === 'number') {
      value = event.target.type;
    }
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const ironbeersService = new IronBeersService();
    ironbeersService.addBeer(this.state).then(() => {
      this.props.history.push('/beers');
    });
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label>First Brewed</label>
          <input
            type="text"
            name="firstBrewed"
            onChange={this.handleChange}
            value={this.state.firstBrewed}
          />
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewersTips"
            onChange={this.handleChange}
            value={this.state.brewersTips}
          />
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuationLevel"
            onChange={this.handleChange}
            value={this.state.attenuationLevel}
          />
          <label>Contributed By</label>
          <input
            type="text"
            name="contributedBy"
            onChange={this.handleChange}
            value={this.state.contributedBy}
          />
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewBeer);
