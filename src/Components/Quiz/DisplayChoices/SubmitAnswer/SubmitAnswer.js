import React, {useState, useRef, forwardRef, memo} from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import icons from './icons';
import { useDispatch } from 'react-redux';

const SubmitAnswer = forwardRef(({choice, setChoice}, ref) => {
    const [nextQuestion, setNextQuestion] = useState(false);
    const errorMessageRef = useRef();
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleNextQuestion = (e) => {
        setChoice('');        
        setNextQuestion(false);
        dispatch({type: 'NEXT_QUESTION'});
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        e.target.innerHTML = 'Submit Answer';
    }

    //this event handler will give a green border to the user's choice if its correct
    //and an red border to the user's choice IF its incorrect 
    const handleSubmit = (e) => {
        if(!choice){
            errorMessageRef.current.style.display = 'flex';
            const bodyHeight = document.querySelector('body').scrollHeight;
            window.scrollTo({
                top: bodyHeight,
                behavior: 'smooth',
              });
            return;
        }
        setNextQuestion(true);
        e.target.innerHTML = 'Next Question';
        const allChoices = document.querySelectorAll('button[data-choice]');    
        const isCorrect = ref.current.getAttribute('data-correct') === 'true';

        if(isCorrect){
            ref.current.style.border = '3px solid #26D782';
            ref.current.firstElementChild.style.backgroundColor = '#26D782';
            ref.current.firstElementChild.color = 'white';
            ref.current.lastElementChild.setAttribute('src', icons['correct']);
            dispatch({type: 'UPDATE_SCORE'})
        }
        else{
            ref.current.style.border = '3px solid #EE5454';
            ref.current.firstElementChild.style.backgroundColor = '#EE5454';
            ref.current.firstElementChild.color = 'white';
            ref.current.lastElementChild.setAttribute('src', icons['incorrect']);
            allChoices.forEach((currentChoice) => {
                if(currentChoice.getAttribute('data-correct') === 'true'){
                    currentChoice.lastElementChild.setAttribute('src', icons['correct']);
                }
            })
        }

        allChoices.forEach((choice) => {
            choice.style.pointerEvents = 'none';
        })
        errorMessageRef.current.style.display = '';
    }

    return(
        <>
            <button type='button' className={theme === 'light' ? 
                [styles.quiz_submit, styles.light].join(' ') : 
                [styles.quiz_submit, styles.dark].join(' ')} 
                onClick={nextQuestion ? handleNextQuestion : handleSubmit}
                >
                    Submit Answer
            </button>     
            <p className={styles.errorMessage} ref={errorMessageRef}>
                <img src={icons['error']}/>
                Please select an answer
            </p>   
        </>

    )
})

export default memo(SubmitAnswer);