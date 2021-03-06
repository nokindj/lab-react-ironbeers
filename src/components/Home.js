import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <h1>
          <NavLink exact to="/beers">
            All Beers
          </NavLink>
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="row">
        <h1>
          <NavLink exact to="/random-beer">
            Random Beer
          </NavLink>
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="row">
        <h1>
          <NavLink exact to="/new-beer">
            New Beer
          </NavLink>
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </div>
  );
}

export default Home;
