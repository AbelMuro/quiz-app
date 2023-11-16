import React, {useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function ProgressBar(){
    const theme = useSelector(state => state.theme);
    const completedQuestions = useSelector(state => state.quiz.completedQuestions)
    const progressRef = useRef();

    useEffect(() => {
        progressRef.current.style.width = `${(completedQuestions) * 10}%`
    }, [completedQuestions])

    return(
        <div 
            className={theme === 'light' ? 
                [styles.quiz_progressBar, styles.light].join(' ') : 
                [styles.quiz_progressBar, styles.dark].join(' ')}>
            <div ref={progressRef}></div>
        </div>
    )
}

export default memo(ProgressBar);