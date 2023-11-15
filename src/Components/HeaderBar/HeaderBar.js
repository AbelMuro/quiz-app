import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import Subject from './Subject';
import styles from './styles.module.css';

function HeaderBar() {
    return(
        <header className={styles.header}>
            <Subject/>
            <ThemeSwitch/>
        </header>
    )
}

export default HeaderBar;