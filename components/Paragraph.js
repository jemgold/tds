import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Paragraph ({
  children, ...props,
}) {
  const cx = classNames("lh-copy", "measure");
  return (
    <p>
      { children }
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.string,
};

export default Paragraph;
