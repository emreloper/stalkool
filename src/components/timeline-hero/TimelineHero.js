import React from 'react';

import styles from './TimelineHero.css';

export default function TimelineHero({ avatar, header, children }) {
  return (
    <article className={styles.article}>
      <section className={styles.avatar}>{avatar}</section>
      <header className={styles.header}>{header}</header>
      {children && <section className={styles.section}>{children}</section>}
    </article>
  );
}
