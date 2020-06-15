import React from 'react';
import PropTypes from 'prop-types';
import React, {usePosition} from 'react';

const Position = ({watch, settings}) => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, settings);

  const loader = !latitude && !error ? (
    <>
      <div>Trying to fetch location...</div>
      <br/>
    </>
  ) : null;

  return (
    <>
      {loader}
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        error: {error}
      </code>
    </>
  );
};

Position.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};

export default Position;