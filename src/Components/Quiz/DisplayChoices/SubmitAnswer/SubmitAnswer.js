import React, {useState, useRef, forwardRef, memo} from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import icons from './icons';
import { useDispatch } from 'react-redux';


const SubmitAnswer = forwardRef(({choice}, ref) => {
    const [nextQuestion, setNextQuestion] = useState(false);
    const errorMessageRef = useRef();
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleNextQuestion = (e) => {
        setNextQuestion(false);
        dispatch({type: 'NEXT_QUESTION'});
        e.target.innerHTML = 'Submit Answer';

        const allChoices = document.querySelectorAll('button[data-choice]');   
        allChoices.forEach((choice) => {
            choice.style.pointerEvents = '';
            choice.style.border = '';
            choice.firstElementChild.style.backgroundColor = '';
            choice.firstElementChild.style.color = '';
            choice.lastElementChild.setAttribute('src', '');
        })
    }

    const handleSubmit = (e) => {
        if(!choice){
            errorMessageRef.current.style.display = 'flex';
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
            ref.current.lastElementChild.setAttribute('src', icons['incorrect'])
        
            allChoices.forEach((currentChoice) => {
                if(currentChoice.getAttribute('data-correct') === 'true'){
                    currentChoice.lastElementChild.setAttribute('src', icons['correct'])
                }
            })
        }

        allChoices.forEach((choice) => {
            choice.style.pointerEvents = 'none';
        })
    }

    return(
        <>
            <button className={theme === 'light' ? 
                [styles.quiz_submit, styles.light].join(' ') : 
                [styles.quiz_submit, styles.dark].join(' ')} 
                onClick={nextQuestion ? handleNextQuestion : handleSubmit}>
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