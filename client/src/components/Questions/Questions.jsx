import React, { useState, useEffect } from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getQuestions } from '../../actions/questions';

const Questions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions) || [];

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const handleOnClick = (answer) => {
    const { correct } = answer;
    if (correct === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const handleReset = () => {
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
    dispatch(getQuestions());
  };

  return (
    <div>
      <div className={classes.paper}>
        {showScore && questions ? (
          <>
            <Typography variant="h3">
              Score: {score}/{questions.length}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={handleReset}
              type="submit"
              fullWidth>
              <Typography variant="subtitle2">Retake Quiz</Typography>
            </Button>
          </>
        ) : (
            <>
              <Paper className={classes.paper}>
                <Typography variant="h5">Question {currentQuestion + 1}: {questions[currentQuestion].title}</Typography>

                {questions[currentQuestion].answers.map((answer, key) => (
                  <Button
                    key={key}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => handleOnClick(answer)}
                    type="submit"
                    fullWidth>
                    <Typography variant="subtitle2">{answer?.text}</Typography>

                  </Button>
                ))}

              </Paper>
            </>
          )}
      </div>
    </div>
  );
};

export default Questions;