import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions';
//import quizCompleteImg from '../assets/quize-complete.png';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';
const Quize = () => {
    // const [activeQutionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setAnswers] = useState([]);
    const activeQutionIndex = userAnswers.length;
    const quizIscomplete = activeQutionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

        setAnswers((prevuserAnswers) => {
            return [...prevuserAnswers, selectedAnswer];
        });
        // }
    }, []);
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    if (quizIscomplete) {
        return (
            <div id='summary'>
                <img src={quizCompleteImg} alt="" />
                <h2>Quize Completed</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[activeQutionIndex].answers];

    shuffledAnswers.sort(() => Math.random() - 0.5);
    return (
        <>
            <div id='quiz'>
                <div id='question'>
                    <QuestionTimer key={activeQutionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                    <h2>{QUESTIONS[activeQutionIndex].text}</h2>
                    <ul id='answers'>
                        {shuffledAnswers.map((answer) => (
                            <li key={answer} className='answer'>
                                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Quize
