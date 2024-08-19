import React, { useEffect } from 'react';

import TagCloud from 'TagCloud';

import classes from './Chart.module.scss';

const Chart = () => {
  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'HTML',
      'CSS',
      'MongoDB',
      'JavaScript',
      'React',
      'Flask',
      'Redux',
      'Git',
      'TypeScript',
      'SQL',
      'Python',
      'Node.js',
      'Next.js',
    ];

    const options = {
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className={classes.charts}>
      <span className="tagcloud"></span>
    </div>
  );
};

export default Chart;
