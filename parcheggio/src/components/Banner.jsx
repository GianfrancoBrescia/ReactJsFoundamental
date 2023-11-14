import React, {Component} from "react";
import {Alert} from "react-bootstrap";
import PropTypes from "prop-types";

export default class Banner extends Component {

    render() {
        return <Alert variant={this.props.type}
                      onClose={this.props.onClose}
                      show={this.props.show}
                      dismissible={true}
                      className="text-center">
            <Alert.Heading>{this.props.title}</Alert.Heading>
            <p>{this.props.text}</p>
        </Alert>;
    }
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
