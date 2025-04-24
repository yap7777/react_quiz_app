// React 라이브러리에서 React와 useState를 가져옴
// - React: 리액트를 사용할 수 있게 해주는 핵심 객체 (JSX를 쓰기 위해 필요함)
// - useState: 상태값(변하는 값)을 기억하고 관리하게 해주는 리액트 도구
import React, { useState } from 'react';

// react-router-dom에서 useNavigate를 가져옴
// - useNavigate: 특정 경로(주소)로 화면을 이동할 수 있게 해주는 함수
import { useNavigate } from 'react-router-dom';

// Home이라는 컴포넌트를 정의함 (이건 우리가 만들 메인 화면임)
function Home() {
    // 닉네임 상태를 만듦
    // nickname: 현재 입력된 닉네임을 저장하는 변수
    // setNickname: nickname 값을 바꾸는 함수
    // useState('') → 처음에는 빈 문자열로 시작
    const [nickname, setNickname] = useState('');

    // 페이지 이동을 위한 도구를 가져옴
    // navigate() 함수를 사용해서 페이지를 바꿀 수 있음
    const navigate = useNavigate();

    // 닉네임 입력창에 글자를 입력할 때마다 실행되는 함수
    // e는 이벤트 객체이고, e.target.value는 지금 입력한 값
    const handleChange = (e) => {
        setNickname(e.target.value); // 입력한 값을 nickname 상태에 저장함
    };

    // "시작하기" 버튼을 눌렀을 때 실행되는 함수
    const handleStart = () => {
        // trim()은 공백을 제거해줌 → 아무것도 안 쓴 경우 체크
        if (!nickname.trim()) {
            alert('닉네임을 입력해주세요.'); // 알림창을 띄움
        } else {
            // 닉네임이 있으면 /quiz/닉네임 으로 이동함
            navigate(`/quiz/${nickname}`);
        }
    };

    // 이 컴포넌트가 화면에 보여줄 내용들 (JSX 반환)
    return (
        // 전체를 감싸는 div. 스타일은 styles.container를 적용
        <div style={styles.container}>
            {/* 큰 제목: "UQuiz" 라고 보여줌 */}
            <h1 style={styles.title}>UQuiz</h1>

            {/* 텍스트 입력창: 닉네임 입력란 */}
            <input
                type="text" // 입력 타입은 텍스트
                placeholder="닉네임을 입력하세요" // 회색으로 보이는 안내 문구
                value={nickname} // 입력된 닉네임을 상태값과 연결
                onChange={handleChange} // 입력할 때마다 handleChange 실행
                style={styles.input} // 입력창 스타일 적용
            />

            {/* 버튼: 클릭하면 handleStart 실행 */}
            <button onClick={handleStart} style={styles.button}>
                시작하기
            </button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
    },
    title: {
        fontSize: '40px',
        marginBottom: '40px',
    },
    input: {
        padding: '10px',
        fontSize: '18px',
        width: '250px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 30px',
        fontSize: '18px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Home;