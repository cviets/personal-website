import Head from 'next/head';

export default function MyHead({myText}) {
    return (
        <Head>
            <title>{myText}</title>
            <link rel="icon" href="/flask-dark.png" media="(prefers-color-scheme: light)" />
            <link rel="icon" href="/flask-light.png" media="(prefers-color-scheme: dark)" />

            <link rel="icon" href="/flask-with-bg.png" />
        </Head>
    );
}