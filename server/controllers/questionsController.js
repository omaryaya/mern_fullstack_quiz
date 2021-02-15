import Question from '../models/questionModel.js';

export const getQuestions = async (req, res) => {
    try {
        let questions = await Question.find();

        console.debug("Questions", questions);

        let fiveQuestions = [];
        for(var i=0 ; i<5 ; i++) {
            var item = questions[Math.floor(Math.random() * questions.length)];
            questions = questions.filter(q => q._id !== item._id);
            fiveQuestions.push(item);
        }

        res.status(200).json(fiveQuestions);
    } catch (err) {

        console.error(err);
        res.status(404).json({ message: err.message });

    }

};

export const createQuestion = async (req, res) => {
    try {
        const question = req;
        const newQuestion = new Question(question);

        await newQuestion.save();
        console.debug("Successfully created question", newQuestion);
        // res.status(201).json(newQuestion);

    } catch (err) {
        // res.status(409).json({ message: err.message });
        console.error(err.message);

    };
};

export const clear = async (req, res) => {
    try {
        await Question.deleteMany({});
        console.debug("Successfully deleted question");
        // res.status(201).json(newQuestion);

    } catch (err) {
        // res.status(409).json({ message: err.message });
        console.error(err.message);

    };
};



/* export const createQuestion = async (req, res) => {
    try {
        const question = req.body;
        const newQuestion = new Question(question);

        await newQuestion.save();
        console.debug("Successfully created question", newQuestion);
        res.status(201).json(newQuestion);

    } catch (err) {
        res.status(409).json({ message: err.message });
        console.error(err.message);

    };
}; */