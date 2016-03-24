import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Avatar from './Avatar';

export default function AvatarTitleSubtitle({
  avatar,
  username,
  subtitle,
  circle,
}) {

  return (
    <header className="tc pv4 pv5-ns">
      <Avatar src={avatar} circle={circle} />
      <h1 className="f5 f4-ns fw6 mid-gray">{ username }</h1>
      <h2 className="f6 gray fw2 ttu tracked">{ subtitle }</h2>
    </header>
  );
}

AvatarTitleSubtitle.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  subtitle: PropTypes.string,
  circle: PropTypes.boolean,
};
