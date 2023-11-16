export default function quizReducer(quiz = {
        subject: '', 
        score: 0, 
        currentQuestionNumber: 0, 
        completedQuestions: 0
    }, action) {
    switch(action.type){
        case 'START_QUIZ':
            return {subject: action.subject, score: 0, currentQuestionNumber: 0, completedQuestions: 0}
        case 'UPDATE_SCORE':
            return {subject: quiz.subject, 
                score: quiz.score + 1, 
                currentQuestionNumber: quiz.currentQuestionNumber, 
                completedQuestions: quiz.completedQuestions};
        case 'NEXT_QUESTION': 
            return {subject: quiz.subject, 
                score: quiz.score, 
                currentQuestionNumber: quiz.currentQuestionNumber + 1, 
                completedQuestions: quiz.completedQuestions
            }
        default: 
            return quiz;
    }
}