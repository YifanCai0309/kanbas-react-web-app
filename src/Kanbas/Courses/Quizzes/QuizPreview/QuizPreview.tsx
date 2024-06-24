import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const ANSWERS_API = `${REMOTE_SERVER}/api/answers`;

const QuizPreview = () => {
  const { qid } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [previousAnswers, setPreviousAnswers] = useState<any>({});
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const quizResponse = await axios.get(`${QUIZZES_API}/${qid}`);
        setQuiz(quizResponse.data);

        const questionsResponse = await axios.get(`${QUIZZES_API}/${qid}/questions`);
        setQuestions(questionsResponse.data);

        const answersResponse = await axios.get(`${ANSWERS_API}/${qid}`);
        setPreviousAnswers(answersResponse.data);
      } catch (err) {
        console.error("Failed to fetch quiz data:", err);
      }
    };

    fetchQuizData();
  }, [qid]);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${ANSWERS_API}/${qid}`, { answers });
      setScore(response.data.score);
    } catch (err) {
      console.error("Failed to submit answers:", err);
    }
  };

  return (
    <div>
      {quiz && <h1>{quiz.title}</h1>}
      <button onClick={() => navigate(`/quiz/${qid}/edit`)}>Edit Quiz</button>
      <div>
        {questions.map((question) => (
          <div key={question._id}>
            <p>{question.question}</p>
            {question.type === 'multiple_choice' && question.choices.map((choice: any) => (
              <div key={choice._id}>
                <input
                  type="radio"
                  name={question._id}
                  value={choice.answer}
                  checked={answers[question._id] === choice.answer}
                  onChange={() => handleAnswerChange(question._id, choice.answer)}
                />
                {choice.answer}
              </div>
            ))}
            {question.type === 'true_false' && (
              <div>
                <input
                  type="radio"
                  name={question._id}
                  value="true"
                  checked={answers[question._id] === 'true'}
                  onChange={() => handleAnswerChange(question._id, 'true')}
                />
                True
                <input
                  type="radio"
                  name={question._id}
                  value="false"
                  checked={answers[question._id] === 'false'}
                  onChange={() => handleAnswerChange(question._id, 'false')}
                />
                False
              </div>
            )}
            {question.type === 'fill_in_blanks' && (
              <input
                type="text"
                value={answers[question._id] || ''}
                onChange={(e) => handleAnswerChange(question._id, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
};

export default QuizPreview;
