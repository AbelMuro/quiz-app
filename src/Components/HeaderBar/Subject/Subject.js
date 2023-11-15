import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import icons from '~/Common/icons';

function Subject() {
    const subject = useSelector(state => state.quiz.subject);
    const theme = useSelector(state => state.theme);
    const iconBoxRef = useRef();

    useEffect(() => {
        if(subject === 'Accessibility')
            iconBoxRef.current.style.backgroundColor = '#F6E7FF';
        else if(subject === 'CSS')
            iconBoxRef.current.style.backgroundColor = '#E0FDEF';
        else if(subject === 'HTML')
            iconBoxRef.current.style.backgroundColor = '#FFF1E9';
        else if(subject === 'Javascript')
            iconBoxRef.current.style.backgroundColor = '#EBF0FF';
    }, [subject])

    return(
        <section className={styles.subject}>
            <div className={styles.subject_icon} ref={iconBoxRef}>
                <img src={icons[`${subject}`]}/>
            </div>
            <h1 className={theme === 'light' ? styles.light : styles.dark}>
                {subject}
            </h1>
        </section>
    )
}

export default Subject;