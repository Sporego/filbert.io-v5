import '../styles/globals.css';
import PropTypes from 'prop-types'; // React built-in typechecking https://reactjs.org/docs/typechecking-with-proptypes.html

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any
};

export default MyApp;
