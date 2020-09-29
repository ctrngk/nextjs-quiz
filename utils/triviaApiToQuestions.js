import decode from 'ent/decode';

const createQuestion = (triviaQuestion) => {
    const answers =
        [
            ...triviaQuestion['incorrect_answers'],
            triviaQuestion['correct_answer']
        ].map((answer) => {
            return decode(answer);
        });

    return {
        title: decode(triviaQuestion.question),
        answers: answers,
        correctAnswer: decode(triviaQuestion['correct_answer'])
    };
};

const triviaApiToQuestions = (triviaApiResults, title, subtitle = '') => {
    const {results: triviaQuestions} = triviaApiResults;

    const questions = triviaQuestions.map(createQuestion);
    return {
        title,
        subtitle,
        questions
    };
};

export default triviaApiToQuestions;
