import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Paragraph from './Paragraph';

function LeftTitle ({
  title,
  subtitle,
  content,
}) {
  const cx = classNames('cf', 'ph3', 'ph5-ns', 'pv5');

  return (
    <article className={cx}>
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="mb3 mt0 lh-title">{ title }</h1>
        <time className="f6 ttu tracked gray">{ subtitle }</time>
      </header>
      <div className="fn fl-ns w-50-ns pt4 pt0-ns">
        { content.map((c, i) => <Paragraph children={c} />) }
      </div>
    </article>
  );
}

LeftTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.array,
};

export default LeftTitle;
