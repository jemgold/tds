import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import classNames from 'classnames';

export default function ProfileCard({
  avatar,
  center,
  username,
  description,
  rounded,
}) {
  const descCx = classNames("lh-copy measure f6 black-70 center", {
    "tc": center,
  });
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <Avatar rounded={rounded} avatar={avatar} />
        <h1 className="f4">{ username }</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className={descCx}>
        { description }
      </p>
    </article>
  );
}

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  center: PropTypes.bool,
  username: PropTypes.string,
  description: PropTypes.string,
  rounded: PropTypes.bool,
};
