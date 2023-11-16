import React, {useState, useCallback, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import DisplayChoices from './DisplayChoices';
import ProgressBar from './ProgressBar';
import data from './data';

function Quiz() {
    const theme = useSelector(state => state.theme);
    const subject = useSelector(state => state.quiz.subject);
    const currentQuestionNumber = useSelector(state => state.quiz.currentQuestionNumber);
    const [allQuestions, setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null);    


    const switchTheme = useCallback((className) => {
        if(theme === 'light')
            return [className ? className : '', styles.light].join(' ');
        else
            return [className ? className : '', styles.dark].join(' ');
    }, [theme])


    useEffect(() => {
        data.quizzes.forEach((quiz) => {
            if(quiz.subject === 'HTML')
                setAllQuestions(quiz.questions);
        });
    }, [])

    useEffect(() => {
        setCurrentQuestion(allQuestions[currentQuestionNumber])
    }, [allQuestions, currentQuestionNumber])


    return(
        <section className={styles.quiz}>
            {
                currentQuestion && 
                <>
                    <div className={styles.quiz_question}>
                        <h2 className={switchTheme()}>
                            {`Question ${currentQuestionNumber + 1} of 10`}
                        </h2>
                        <h1 className={switchTheme()}>
                            {currentQuestion.question}                 
                        </h1>
                        <ProgressBar/>
                    </div>   
                    <DisplayChoices choices={currentQuestion.options} answer={currentQuestion.answer}/>
                </>

            }
        </section>
    )
}

export default Quiz;