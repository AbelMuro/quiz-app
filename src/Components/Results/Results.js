import React, {useRef, useEffect, useCallback} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icons from '~/Common/icons';

function Results() {
    const theme = useSelector(state => state.theme);
    const subject = useSelector(state => state.quiz.subject);
    const score = useSelector(state => state.quiz.score);
    const totalQuestions = useSelector(state => state.quiz.currentQuestionNumber);
    const subjectIconRef = useRef();
    const navigate = useNavigate();

    const handlePlayAgain = () => {
        navigate('/')
    }

    const switchTheme = useCallback((className) => {
        if(theme === 'light')
            return [className ? className : '', styles.light].join(' ');
        else
            return [className ? className : '', styles.dark].join(' ')
    }, [theme])

    useEffect(() => {
        if(subject === 'HTML')
            subjectIconRef.current.style.backgroundColor = '#FFF1E9';
        else if (subject === 'CSS')
            subjectIconRef.current.style.backgroundColor = '#E0FDEF';
        else if(subject === 'Javascript')
            subjectIconRef.current.style.backgroundColor = '#EBF0FF';
        else
            subjectIconRef.current.style.backgroundColor = '#F6E7FF';
    }, [subject])

    useEffect(() => {
        if(!subject)
            navigate('/')
    }, [subject])

    return(
        <section className={styles.results}>
            <div className={styles.results_intro}>
                <h1 className={switchTheme()}>
                    Quiz completed
                </h1>
                <h2 className={switchTheme()}>
                    You scored... 
                </h2>                
            </div>
            <div className={styles.results_score}>
                <div className={switchTheme(styles.results_scoreBox)}>
                    <h3 className={switchTheme(styles.results_subject)}>
                        <div ref={subjectIconRef}>
                            <img src={icons[subject]}/>                            
                        </div>
                        {subject}
                    </h3>
                    <h1 className={switchTheme(styles.results_finalScore)}>
                        {score}
                    </h1>
                    <h4 className={switchTheme(styles.results_totalQuestions)}>
                        out of {totalQuestions}
                    </h4>
                </div>
                <button className={styles.results_playAgain} onClick={handlePlayAgain}> 
                    Play Again
                </button>
            </div>
        </section>
    )
}

export default Results;