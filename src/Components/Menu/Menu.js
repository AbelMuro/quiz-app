import React from 'react';
import styles from './styles.module.css';

function Menu() {
    return(
        <section className={styles.menu}>
            <h1>
                Welcome to the
                <span>Frontend Quiz</span>
            </h1>
            <p>
                Pick a subject to get started
            </p>
        </section>
    )
}

export default Menu;