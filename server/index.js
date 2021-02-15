import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import * as Constants from './Constants.js';
import questionsRouter from './routes/questionsRouter.js';

import { InitializeQuestions } from './util.js';
import { createQuestion, clear } from './controllers/questionsController.js';

const app = express();
app.use(cors());

app.use('/questions', questionsRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(Constants.CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(Constants.PORT, () => console.debug(`Server Running on port #${Constants.PORT}.`));
        clear();
        const questions = InitializeQuestions();
        for(var i in questions) {
            createQuestion(questions[i]);
        }

    })
    .catch((error) => {
        console.error(error.message);
    });

mongoose.set('useFindAndModify', false);