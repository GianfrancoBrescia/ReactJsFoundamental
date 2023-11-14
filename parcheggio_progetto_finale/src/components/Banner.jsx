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
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
