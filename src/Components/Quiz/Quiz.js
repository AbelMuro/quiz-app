import React, {useCallback} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

function Quiz() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const switchTheme = useCallback((className) => {
        if(theme === 'light')
            return [className ? className : '',styles.light].join(' ');
        else
            return [className ? className : '',styles.dark].join(' ');
    }, [theme])

    return(
        <section className={styles.quiz}>
            <div className={styles.quiz_question}>
                <h2 className={switchTheme()}>
                    Question 6 of 10
                </h2>
                <h1 className={switchTheme()}>
                    Which of these color contrast 
                    ratios defines the minimum 
                    WCAG 2.1 Level AA requirement 
                    for normal text?                    
                </h1>
                <div className={switchTheme(styles.quiz_progressBar)}>
                    <div></div>
                </div>
            </div>
            <div className={styles.quiz_answers}>
                <div className={switchTheme(styles.quiz_answer)}>
                    <h3>
                        A
                    </h3>
                    <p className={switchTheme()}>
                        4.5 : 1
                    </p>
                </div>
                <div className={switchTheme(styles.quiz_answer)}>
                    <h3>
                        B
                    </h3>
                    <p className={switchTheme()}>
                        3 : 1
                    </p>
                </div>
                <div className={switchTheme(styles.quiz_answer)}>
                    <h3>
                        C
                    </h3>
                    <p className={switchTheme()}>
                        2.5 : 1
                    </p>
                </div>
                <div className={switchTheme(styles.quiz_answer)}>
                    <h3>
                        D
                    </h3>
                    <p className={switchTheme()}>
                        5 : 1
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Quiz;