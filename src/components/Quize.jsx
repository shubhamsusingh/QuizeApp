import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions';
//import quizCompleteImg from '../assets/quize-complete.png';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';
const Quize = () => {
    // const [activeQutionIndex, setActiveQuestionIndex] = useState(0);
    const [answerState, setAnswersState] = useState('');
    const [userAnswers, setAnswers] = useState([]);
    const activeQutionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIscomplete = activeQutionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswersState('answered');
        setAnswers((prevuserAnswers) => {
            return [...prevuserAnswers, selectedAnswer];
        });
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQutionIndex].answers[0]) {
                setAnswers('correct');
            } else {
                setAnswers('wrong');
            }
            setTimeout(() => {
                setAnswersState('');
            }, 2000);
        }, 1000);
        // }
    }, [activeQutionIndex]);
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
                        {shuffledAnswers.map((answer) => {
                            const isSeleted = userAnswers[userAnswers.length - 1] === answer;
                            let cssClass = '';
                            if (answerState === 'answered' && isSeleted) {
                                cssClass = 'selected';
                            }
                            if ((answerState === 'correct' || answerState === 'wrong') && isSeleted) {
                                cssClass = answerState;
                            }

                            return (<li key={answer} className='answer'>
                                <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>{answer}</button>
                            </li>);
                        }
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Quize
