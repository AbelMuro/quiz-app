import React, {useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProgressBar({totalQuestions}){
    const navigate = useNavigate();
    const theme = useSelector(state => state.theme);
    const currentQuestionNumber = useSelector(state => state.quiz.currentQuestionNumber);
    const progressRef = useRef();

    useEffect(() => {
        progressRef.current.style.width = `${currentQuestionNumber/totalQuestions * 100}%`;
    }, [currentQuestionNumber])

    useEffect(() => {
        if(currentQuestionNumber === totalQuestions)
            navigate('/results');
    }, [currentQuestionNumber])

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