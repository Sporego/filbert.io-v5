//import html and page specific css here
import Head from 'next/head';
import Navbar from '../components/Navbar';

// import components here

// main component function here

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
        </div>
    );
}
