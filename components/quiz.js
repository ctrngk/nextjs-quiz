import React, {useState} from 'react';

const Quiz = (dataProps) => {
    const [answers, setAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(1) // index
    // const {data: {title, questions}} = dataProps
    const questions = dataProps.data2.questions
    const title = dataProps.data2.title
    const data = dataProps.data2
    const currentQuestionA = questions[currentQuestion-1]

    return <div>
        <h2>{title}</h2>
        {
            (currentQuestion > questions.length)
                ? <div> <div> result {JSON.stringify(data)} </div> <div> {JSON.stringify(answers)}</div></div>
                : <div>
                    <h3>{currentQuestionA.title}</h3>
                    <h4>{currentQuestionA.subtitle ? currentQuestionA.subtitle : data.subtitle ? data.subtitle : ''}</h4>
                    <div>
                        {currentQuestionA.answers.map((answer, index) =>
                            <div onClick={
                                () => {
                                    setAnswers([...answers, index])
                                    setCurrentQuestion(currentQuestion+1)
                                }
                            }><p>{answer}</p></div>
                        )}
                    </div>
                </div>
        }
    </div>
}

export default Quiz

