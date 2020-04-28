import React from 'react';
import styles from './home.module.css';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Pizza App</h1>
        <div>
          <Link path={{ route: BaseRoute.SIZE }}>
            <button>Place an order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};