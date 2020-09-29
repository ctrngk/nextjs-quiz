import 'isomorphic-fetch'

import Page from '../components/page.js';
import Quiz from '../components/quiz.js';
import triviaApiToQuestions from '../utils/triviaApiToQuestions';

export async function getServerSideProps() {
    const results = await fetch(`https://opentdb.com/api.php?amount=10&category=10`);
    const quizQuestions = await results.json();
    const data = triviaApiToQuestions( quizQuestions, `Random book quiz`)
    return {
        props: data
    }
}

function RandomPage(data) {
    return <Page> <Quiz data2={data} /> </Page>
}

export default RandomPage