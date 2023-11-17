export default function quizReducer(quiz = {
        subject: '', 
        score: 0, 
        currentQuestionNumber: 0
    }, action) {
    switch(action.type){
        case 'START_QUIZ':
            return {subject: action.subject, score: 0, currentQuestionNumber: 0}
        case 'UPDATE_SCORE':
            return {subject: quiz.subject, 
                score: quiz.score + 1, 
                currentQuestionNumber: quiz.currentQuestionNumber};
        case 'NEXT_QUESTION': 
            return {subject: quiz.subject, 
                score: quiz.score, 
                currentQuestionNumber: quiz.currentQuestionNumber + 1
            }
        default: 
            return quiz;
    }
}