import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'We Care About Community ❤',
    Svg: require('../../static/img/care.svg').default,
    description: (
      <>
        Communities bring people with shared interests together to collaboratively build something.
      </>
    ),
  },
  {
    title: 'Why Open Source ? ☀',
    Svg: require('../../static/img/open_source.svg').default,
    description: (
      <>
        Open source encourages innovation through collaboration.
      </>
    ),
  },
  {
    title: 'About Winter Of Contributing ❄',
    Svg: require('../../static/img/gwoc.svg').default,
    description: (
      <>
        A 3 month-long program by <a href ="https://www.girlscript.tech/home"><strong>GirlScript Foundation</strong> </a>to create the world's largest multilingual content repository that will be available to everyone.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
