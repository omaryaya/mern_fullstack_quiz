import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    title: String,
    answers: [{
        text: String,
        correct: Boolean
    }],
});

const Question = mongoose.model('Question', questionSchema);

export default Question;