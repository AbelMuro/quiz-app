export default function quizReducer(quiz = {subject: '', score: 0}, action) {
    switch(action.type){
        case 'START_QUIZ':
            return {subject: action.subject, score: 0}
        case 'UPDATE_SCORE':
            return {subject: quiz.subject, score: quizScore + 1};
        default: 
            return quiz;
    }
}