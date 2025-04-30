// Result.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results() {
    const location = useLocation();
    const navigate = useNavigate();
    const { nickname, score } = location.state;

    const [rankingList, setRankingList] = useState([]);

    // 첫 진입 시 localStorage에 저장 + 최신 랭킹 불러오기
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('rankingList')) || [];

        const updated = [...stored, { nickname, score }];
        updated.sort((a, b) => b.score - a.score); // 점수 높은 순

        localStorage.setItem('rankingList', JSON.stringify(updated));
        setRankingList(updated);
    }, [nickname, score]);

    return (
        <div style={styles.container}>
            <h1>퀴즈 완료 🎉</h1>
            <p>닉네임: <strong>{nickname}</strong></p>
            <p>점수: <strong>{score}</strong></p>

            <h2>🏆 Top 랭킹</h2>
            <ol>
                {rankingList.slice(0, 5).map((item, index) => (
                    <li key={index}>
                        {item.nickname}: {item.score}점
                    </li>
                ))}
            </ol>

            <button onClick={() => navigate('/home')} style={styles.button}>
                다시하기
            </button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '100px',
    },
    button: {
        marginTop: '30px',
        padding: '10px 30px',
        fontSize: '18px',
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Results;