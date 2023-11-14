import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import styles from './styles.module.css';

function HeaderBar() {
    return(
        <header className={styles.header}>
            <ThemeSwitch/>
        </header>
    )
}

export default HeaderBar;