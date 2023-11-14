import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
    render() {
        return <div className="form-group mb-0 w-25" style={{paddingBottom: "5px"}}>
            <label for={this.props.id}><strong>{this.props.label}</strong></label>
            <input id={this.props.id}
                   type={this.props.type}
                   name={this.props.name}
                   placeholder={this.props.placeholder}
                   value={this.props.value != null ? this.props.value : ""}
                   className="form-control"
                   onChange={this.props.onChange}/>
        </div>
    }
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
};

Input.defaultProps = {
    label: null,
    type: "text",
    placeholder: null,
    value: null,
    onChange: () => undefined
};
