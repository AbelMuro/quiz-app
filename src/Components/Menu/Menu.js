import React, {useCallback} from 'react';
import styles from './styles.module.css';
import icons from '~/Common/icons';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Menu() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubject = (e) => {
        const subject = e.target.getAttribute('data-subject');
        dispatch({type: 'START_QUIZ', subject})
        navigate('/quiz');
    }

    const switchTheme = useCallback(() => {
        if(theme === 'light')
            return styles.light;
        else
            return styles.dark;
    },[theme])

    return(
        <section className={styles.menu}>
            <div className={styles.menu_intro}>
                <h1 className={switchTheme()}>
                    Welcome to the
                    <span>Frontend Quiz</span>
                </h1>
                <p className={switchTheme()}>
                    Pick a subject to get started
                </p>                
            </div>
            <div className={styles.menu_subjects}>
                <button className={switchTheme()} onClick={handleSubject} data-subject='HTML'>
                    <div className={styles.subject_icon}>
                        <img src={icons['HTML']}/>
                    </div>
                    HTML
                </button>
                <button className={switchTheme()} onClick={handleSubject} data-subject='CSS'>
                    <div className={styles.subject_icon}>
                        <img src={icons['CSS']}/>
                    </div>
                    CSS
                </button>
                <button className={switchTheme()} onClick={handleSubject} data-subject='Javascript'>
                    <div className={styles.subject_icon}>
                        <img src={icons['Javascript']}/>
                    </div>
                    Javascript
                </button>
                <button className={switchTheme()} onClick={handleSubject} data-subject='Accessibility'>
                    <div className={styles.subject_icon}>
                        <img src={icons['Accessibility']}/>
                    </div>
                    Accessibility
                </button>
            </div>
        </section>
    )
}

export default Menu;