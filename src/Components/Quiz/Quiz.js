import React, {useState, useCallback, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import DisplayChoices from './DisplayChoices';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';
import data from './data';

function Quiz() {
    const theme = useSelector(state => state.theme);
    const subject = useSelector(state => state.quiz.subject);
    const navigate = useNavigate();
    const currentQuestionNumber = useSelector(state => state.quiz.currentQuestionNumber);
    const [allQuestions, setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null);    

    const switchTheme = useCallback((className) => {
        if(theme === 'light')
            return [className ? className : '', styles.light].join(' ');
        else
            return [className ? className : '', styles.dark].join(' ');
    }, [theme])

    //this useEffect will traverse through all the quizzes until it finds the quiz that the user selected
    useEffect(() => {
        data.quizzes.forEach((quiz) => {
            if(quiz.subject === subject)
                setAllQuestions(quiz.questions);
        });
    }, [])

    //we traverse through the questions starting from 0, 1, 2, 3, 4 ....
    useEffect(() => {
        setCurrentQuestion(allQuestions[currentQuestionNumber])
    }, [allQuestions, currentQuestionNumber])

    //in case the user refreshes the page, we redirect them to the main menu
    useEffect(() => {
        if(!subject)
            navigate('/');
    }, [subject])


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
                        <ProgressBar totalQuestions={allQuestions.length}/>
                    </div>   
                    <DisplayChoices choices={currentQuestion.options} answer={currentQuestion.answer}/>
                </>

            }
        </section>
    )
}

export default Quiz;