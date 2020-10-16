//import html and page specific css here
import Head from 'next/head';
import Navbar from '../components/Navbar';

// import components here

import Jumbotron from '../components/Jumbotron';

// main component function here

export default function Home() {
    return (
        <div>
            <Head>
                <title>Filbert Shi | Full-Stack Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <Jumbotron
                header="Hello!"
                paragraph="ipsum lorem blah blah"
                variant="primary"
                buttonText="test"
            />
        </div>
    );
}
