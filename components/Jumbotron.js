// import individual react-bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function jumbo(props) {
    // functions

    // returned component
    return (
        <Jumbotron>
            <h1>{props.header}</h1>
            <p>{props.paragraph}</p>
            <p>
                <Button variant={props.variant}>{props.buttonText}</Button>
            </p>
        </Jumbotron>
    );
}
