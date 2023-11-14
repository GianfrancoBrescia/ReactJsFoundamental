import React, {Component} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import PropTypes from "prop-types";

export default class CustomTooltip extends Component {

    render() {
        return <OverlayTrigger placement={this.props.placement} overlay={<Tooltip>{this.props.text}</Tooltip>}>
            {this.props.content}
        </OverlayTrigger>;
    }
}

CustomTooltip.propTypes = {
    placement: PropTypes.string.isRequired,
    text: PropTypes.string,
    content: PropTypes.node.isRequired
};

CustomTooltip.defaultProps = {
    text: null
};
