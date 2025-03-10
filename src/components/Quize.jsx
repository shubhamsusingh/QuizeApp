import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions';
//import quizCompleteImg from '../assets/quize-complete.png';
// import quizCompleteImg from '../assets/quiz-complete.png'
// import QuestionTimer from './QuestionTimer';
// import Answers from './Answers';
import Question from './Question';
import Summary from './Summary';
const Quize = () => {
    // const [activeQutionIndex, setActiveQuestionIndex] = useState(0);

   
    const [userAnswers, setAnswers] = useState([]);
    const activeQutionIndex =  userAnswers.length;
    const quizIscomplete = activeQutionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
       
        setAnswers((prevuserAnswers) => {
            return [...prevuserAnswers, selectedAnswer];
        });
        
    }, []);
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    if (quizIscomplete) {
        return (
           <Summary userAnswers={userAnswers}/> 
        )
    }


    return (
        <>
            <div id='quiz'>
                <Question key={activeQutionIndex} index={activeQutionIndex}  onSelectAnswer={handleSelectAnswer}   onSkipAnswer={handleSkipAnswer} />
            </div>

        </>
    )
}

export default Quize
