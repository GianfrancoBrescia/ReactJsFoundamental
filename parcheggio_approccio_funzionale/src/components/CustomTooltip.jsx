import {OverlayTrigger, Tooltip} from "react-bootstrap";
import PropTypes from "prop-types";

export default function CustomTooltip(props) {

    return <OverlayTrigger placement={props.placement}
                           overlay={<Tooltip>{props.text}</Tooltip>}>{props.content}</OverlayTrigger>;
}

CustomTooltip.propTypes = {
    placement: PropTypes.string.isRequired,
    text: PropTypes.string,
    content: PropTypes.node.isRequired
};

CustomTooltip.defaultProps = {
    text: null
};
