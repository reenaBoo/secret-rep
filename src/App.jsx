import { StyledApp, Cursor, Button, Text, Home, Quiz, Title, Container } from './App.styles';
import { textArr } from './constants';
import { useEffect, useState } from 'react';
import useScrollPosition from './useScrollPosition';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [arrWords, setArrWords] = useState([]);
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const stars = useScrollPosition(0.25);
  const moon = useScrollPosition(1.05);
  const text = useScrollPosition(1);
  const mountainsBack = useScrollPosition(0.5);
  const mountainsFront = useScrollPosition(0);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  function handleAnswerOptionClick(index) {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < textArr.length) {
      textArr[currentQuestion].answerOptions[index].isTrue = true;
      setArrWords([...arrWords, textArr[currentQuestion].answerOptions[index].buttonText]);
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <StyledApp>
      <Cursor
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
      <Home>
        <img
          src='https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/stars.png'
          alt='Stars overlay'
          id='stars'
          style={{ left: stars }}
        />
        <img
          src='https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/moon.png'
          alt='Moon'
          className='moon'
          id='moon'
          style={{ top: moon }}
        />
        <img
          src='https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_back.png'
          alt='Mountains back'
          id='mountains_back'
          style={{ top: mountainsBack }}
        />
        <p style={{ marginTop: text, maxWidth: '750px', textAlign: 'center', lineHeight: '1.4' }}>Замурчательный
          мой брецелёчек! <br /> В награду за то, что терпишь меня уже год как, <br /> в эту чудесную дату &ndash; 69, я
          приготовила
          <br /> для тебя небольшое испытание. <br />Листай вниз, чтобы узнать про простой советский...</p>
        <img
          src='https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_front.png'
          alt='Mountains front'
          id='mountains_front'
          style={{ top: mountainsFront }}
        />
      </Home>
      <Quiz>
        {showScore ? (
          <Container>
            <Text>Любимый мой <span>{arrWords[0]}</span>, который всегда <span>{arrWords[1]}</span>, но такой сладкий
              как <span>{arrWords[2]}</span></Text>
            <Text>Отправь прокомод<span> ДАМТЫКНУТЬВЖЕППУ </span><br />коте в личку и получи подарок</Text>
          </Container>
        ) : (
          <div>
            <Title>...квиз! Выбери один из вариантов</Title>
            {textArr[currentQuestion].answerOptions.map((text, index) => (
              <Button key={index} onClick={() => handleAnswerOptionClick(index)}>
                {text.buttonText}
              </Button>
            ))}
          </div>
        )}
      </Quiz>
    </StyledApp>
  );
}

export default App;
