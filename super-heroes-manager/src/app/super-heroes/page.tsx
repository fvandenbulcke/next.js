import React from 'react';
import Link from 'next/link';
import styles from './SuperHeroes.module.css';
import { heroes } from '../data/heroes';

export default function SuperHeroesPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Super Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            {hero.name} – {hero.alias} – <em>{hero.powers.join(', ')}</em> - <Link className={styles.link} href={`/super-heroes/${hero.id}/details`}>
              View details
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
