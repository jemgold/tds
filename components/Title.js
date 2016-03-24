import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Title ({
  title,
}) {
  const cx = classNames();
  return (
    <h1 class="mb3 mt0 lh-title">{ title }</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
