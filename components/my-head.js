import Head from 'next/head';

export default function MyHead({myText}) {
    return (
        <Head>
            <title>{myText}</title>
            <link rel="icon" href="/flask-light.png"/>
        </Head>
    );
}