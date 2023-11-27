import React, {useState, useEffect, useRef, useCallback, memo} from 'react';
import styles from './styles.module.css';
import { useSelector} from 'react-redux';
import SubmitAnswer from './SubmitAnswer';
import icons from '~/Common/icons';

function DisplayChoices({choices, answer}){
    const theme = useSelector(state => state.theme);
    const [choice, setChoice] = useState('');
    const choiceRef = useRef();

    //this event handler will save a reference to the choice the user selected
    const handleClick = (e) => {
        if(!e.target.matches('.' + styles.quiz_answer)) return;

        const selectedChoice = e.target.getAttribute('data-choice');
        choiceRef.current = e.target;
        setChoice(selectedChoice);
    }

    const switchTheme = useCallback((className) => {
        if(theme === 'light')
            return [className ? className : '', styles.light].join(' ');
        else
            return [className ? className : '', styles.dark].join(' ');
    }, [theme])

    //this useEffect will give a purple border to the choice that the user selected
    useEffect(() => {
        const allChoices = document.querySelectorAll('.' + styles.quiz_answer);

        allChoices.forEach((currentChoice) => {
            currentChoice.style.border = '';
            currentChoice.firstElementChild.style.backgroundColor = '';
            currentChoice.firstElementChild.style.color = ''
            currentChoice.lastElementChild.setAttribute('src', icons['transparent']);
            currentChoice.style.pointerEvents = ''
        })

        allChoices.forEach((currentChoice) => {
            if(currentChoice.getAttribute('data-choice') === choice){
                currentChoice.style.border = '3px solid #A729F5';
                currentChoice.firstElementChild.style.backgroundColor = '#A729F5';
                currentChoice.firstElementChild.style.color = '#FFF'
            }   
        })
    }, [choice])

    return(
        <div className={styles.quiz_answers} 
            onClick={handleClick}
            transition={{staggerChildren: 0.4}}>
            {
                choices.map((option, i) => {
                    const letter = (i + 10).toString(36).toUpperCase(); //converting numbers to letters (1 --> a, 2 --> b, etc...)
                    return(
                        <button type='button' 
                            className={switchTheme(styles.quiz_answer)} 
                            data-choice={letter} 
                            data-correct={option === answer}
                            key={i}>
                                <h3>
                                    {letter}
                                </h3>
                                <p className={switchTheme()}>
                                    {option}
                                </p>
                                <img className={styles.isCorrectIcon} src={icons['transparent']} />
                        </button>
                    )
                })
            }
            <SubmitAnswer choice={choice} setChoice={setChoice} ref={choiceRef}/>
        </div>  
    )
}

export default memo(DisplayChoices);