import React, { useState } from 'react'
import './App.css';

function App() {
  const [ currentQuestion, setCurrentQuestion] =useState(0);
  const [next, setNext ] = useState(false);
  const [answers, setAnswers ] = useState([]);
  const [score, setScore] = useState(0);
  const [ feedback, setFeedback] = useState(null);
  const [showScore, setShowScore] =useState(false);

  const handleAnswer = (answer) => {
    // console.log(answer);
    const newAnswer = {
      question: quizData[currentQuestion].question,
      answer: answer,
      correct: answer === quizData[currentQuestion].correct,
    };

    if(newAnswer.correct){
      setScore((prevScore) => prevScore +1 );
      setFeedback('〇');
    }else{
      setFeedback('✕');
    }
    setAnswers([...answers, newAnswer]);
    setNext(true);
  }

  const goToNextQuestion = () => {
    const NextQuestion = currentQuestion +1
    if(NextQuestion     < quizData.length){
      setCurrentQuestion(NextQuestion);
    } else {
      setShowScore(true);
    }
    setNext(false)
  }

  return (<div className='quiz-container'>
    { showScore ? (
      <div className='score-section'>
        <h1>スコア</h1>
        <h2>{score}/{quizData.length}</h2>
        <table className='answer-table'>
          <thead>
            <tr>
              <td>質問</td> <td>あなたの解答</td> <td>合否</td>
            </tr>
          </thead>
        </table>
        <tbody>
          {answers.map((item)=>(
            <tr className={item.correct ? 'correct' :'wrong'}>
              <td>{item.question}</td>
              <td>{item.answer}</td>
              <td>{item.correct ? '〇' : '✕' }</td>
            </tr>
          ))}
        </tbody>
      </div>
    ) : (
      <div className='question-section'>
        <h1>問題{currentQuestion +1}/{quizData.length}</h1>
        <h2>{quizData[currentQuestion].question}</h2>

        {next ? (
          <div className='feedback-section'>
            <h2 className='large-feedback'>{feedback}</h2>
            <p>正解は</p>
            <p>{quizData[currentQuestion].correct}</p>
            <button onClick={goToNextQuestion}>次の問題へ</button>
          </div>
        ) : (
          <div className='answer-section'>
            {quizData[currentQuestion].options.map((itme, index)=>(
              <button key={index} onClick={() => handleAnswer(itme)} className={`quiz-option-button option-${index}`}>{itme}</button>
            ))}
          </div>
        ) }
      </div>
    )}
    </div>
  );  
}



const quizData = [
  {
    question:"太陽系で最も大きい惑星はどれですか？",
    options:["地球","火星","金星","木星"],
    correct:"木星",
  },
  {
    question:"次のうち、哺乳類ではない動物はどれですか？",
    options:["カンガルー","ゴリラ","ペンギン","カバ"],
    correct:"ペンギン",
  },
  {
    question:"モナ・リザを書いた画家は誰ですか？",
    options:["レオナルド・ダ・ヴィンチ",
      "ミケランジェロ",
      "フィンセント・ヴァン・ゴッホ",
      "クロード・モネ",
    ],
    correct:"レオナルド・ダ・ヴィンチ",
  },
  {
    question:"農林水産省の定義で果物ではないのはどれ？",
    options:["トマト","りんご","ぶどう","すいか","バナナ",],
    correct:"すいか",
  },
  {
    question:"ウルトラの父の本名は？",
    options:["ウルトラマンケン","ウルトラファザー","ウルトラソウル","ウルトラマンベルト",],
    correct:"ウルトラマンケン",
  },
  {
    question:"ウルトラ６兄弟の長男は？",
    options:["ゾフィー","ウルトラマン","ウルトラセブン","ウルトラマンエース","ウルトラマンゼット",],
    correct:"ゾフィー",
  },
  {
    question:"ウルトラマンゼロの父親は？",
    options:["ウルトラの父","ウルトラマンエース","ウルトラマンオメガ","ウルトラマンマックス","ウルトラセブン",],
    correct:"ウルトラセブン",
  },
  {
    question:"TDGに分類れてないウルトラマンは？",
    options:["ウルトラマンティガ","ウルトラマントリガー","ウルトラマンダイナ","ウルトラマンガイア"],
    correct:"ウルトラマントリガー",
  },
  {
    question:"ウルトラマンゼットが師匠と呼んでないのは？",
    options:["ウルトラマンゼロ","ウルトラマンレオ","ウルトラセブン","ウルトラマン",],
    correct:"ウルトラマン",
  },
  {
    question:"ウルトラの星、M７８星雲は実在するか",
    options:["〇","✕"],
    correct:"〇<実はオリオン座の真ん中あたりにある。>",
  },
];
export default App;