import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import questions from './data/questions.json';

function Quiz() {
    const { nickname } = useParams();  // URL에서 닉네임 가져옴
    const navigate = useNavigate();    // 페이지 이동 기능

    const [currentIndex, setCurrentIndex] = useState(0);  // 현재 문제 번호
    const [selectedOption, setSelectedOption] = useState(null);  // 선택한 보기
    const [answerCounts, setAnswerCounts] = useState(0);  // 맞춘 문제 수

    const currentQuestion = questions[currentIndex]; // 현재 문제 데이터

    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    const handleNext = () => {
        if (selectedOption === null) {
            alert('선택지를 선택해주세요.');
            return;
        }

        // 정답 체크
        if (selectedOption === currentQuestion.answer) {
            setAnswerCounts(answerCounts + 1);
        }

        if (currentIndex + 1 < questions.length) {
            // 다음 문제로
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null); // 선택 초기화
        } else {
            // 마지막 문제 → 결과 페이지로 이동
            navigate(`/results/${nickname}`, {
                state: { nickname, score: answerCounts },
            });
        }
    };

    return (
        <div>
            <h2>문제 {currentIndex + 1}</h2>
            <p>{currentQuestion.question}</p>

            {currentQuestion.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    style={{
                        backgroundColor: selectedOption === index ? 'lightblue' : 'white',
                        margin: '5px'
                    }}
                >
                    {option}
                </button>
            ))}

            <br />
            <button onClick={handleNext}>다음</button>
        </div>
    );
}

export default Quiz;