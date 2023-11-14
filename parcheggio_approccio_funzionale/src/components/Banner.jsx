import {Alert} from "react-bootstrap";
import PropTypes from "prop-types";

export default function Banner(props) {
    return (
        <Alert variant={props.type}
               onClose={props.onClose}
               show={props.show}
               dismissible={true}
               className="text-center">
            <Alert.Heading>{props.title}</Alert.Heading>
            <p>{props.text}</p>
        </Alert>
    );
}

Banner.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func
};

Banner.defaultProps = {
    type: null,
    title: null,
    text: null,
    show: false,
    onClose: () => undefined
};
