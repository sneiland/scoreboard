import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = ( { title } ) => {
  return (
    <header>
      <Stats/>
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
