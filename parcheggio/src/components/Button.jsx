import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    render() {
        return <div style={{paddingTop: "5px"}}>
            <button
                type={"button"}
                onClick={this.props.onClick}
                className="btn btn-primary">
                {this.props.label}
            </button>
        </div>
    }
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    label: null,
    onClick: () => undefined
};
