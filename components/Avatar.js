import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Avatar({
  avatar,
  circle,
  border,
}) {
  const cx = classNames('h3 w3', {
    'br-100': circle,
    'pa1 ba b--black-10': border,
  });

  return (
    <img src={avatar} className={cx} title="Kitty staring at you" />
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  circle: PropTypes.bool,
};

