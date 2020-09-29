import Link from 'next/link';

export default () => (
    <header>
        <nav>
            <Link href="/"><a title="Home">Home</a></Link>
            <Link href="/random"><a title="About">Random Quiz</a></Link>
        </nav>
    </header>
);
