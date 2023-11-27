import React, {useCallback, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import backgroundImages from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function ThemeSwitch () {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const whiteDotRef = useRef();
    const [mobile] = useMediaQuery('(max-width: 550px)');
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const handleSwitch = () => {
        dispatch({type: 'SWITCH_THEME'});
    }

    const changeBackground = (mediaQuery) => {
        const body = document.getElementsByTagName('body')[0];

        if(theme === 'light'){
            body.style.backgroundColor = '#F4F6FA';
            body.style.backgroundImage = `url(${backgroundImages[`light${mediaQuery}`]})`
        }
        else {
            body.style.backgroundColor = '#313E51';
            body.style.backgroundImage = `url(${backgroundImages[`dark${mediaQuery}`]})`;
        }

    }

    const switchTheme = useCallback((currentClass) => {
        if(theme === 'light')
            return [currentClass, styles.light].join(' ');
        else
            return [currentClass, styles.dark].join(' ');
    }, [theme])

    useEffect(() => {
        if(theme === 'light')
            whiteDotRef.current.style.left = '';
        else
            whiteDotRef.current.style.left = '24px';
    },[theme])

    useEffect(() => {
        if(mobile)
            changeBackground('Mobile')
        else if(tablet)
            changeBackground('Tablet')
        else 
            changeBackground('Desktop')
          
    }, [theme, mobile, tablet])

    return(
        <div className={styles.theme}>
            <div className={switchTheme(styles.theme_sun)}/>
            <div className={styles.theme_switch} onClick={handleSwitch}>
                <div ref={whiteDotRef}></div>
            </div>
            <div className={switchTheme(styles.theme_moon)}/>
        </div>
    )
}

export default ThemeSwitch;