import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function ThemeSwitch () {
    const theme = useSelector(state => state.theme);
    
    const switchTheme = useCallback((currentClass) => {
        if(theme === 'light')
            return [currentClass, styles.light].join(' ');
        else
            return [currentClass, styles.dark].join(' ');
    }, [theme])

    return(
        <div className={styles.theme}>
            <div className={switchTheme(styles.theme_sun)}/>
            <div className={styles.theme_switch}>
                <div></div>
            </div>
            <div className={switchTheme(styles.theme_moon)}/>
        </div>
    )
}

export default ThemeSwitch;