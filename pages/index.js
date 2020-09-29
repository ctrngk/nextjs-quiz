import Page from '../components/page.js';
import Quiz from '../components/quiz.js';
import exampleQuestions from '../data/exampleQuestions';

export async function getServerSideProps() {
    // TODO: Assume it'll be asynchronous from a data source
    const data = await exampleQuestions;
    // Pass data to the page via props
    return {
        props: data
    }
}

function HomePage(data) {
    return <Page> <Quiz data2={data} /></Page>
}

export default HomePage