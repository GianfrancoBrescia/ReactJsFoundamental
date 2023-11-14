import PropTypes from "prop-types";

export default function Input(props) {
    return (
        <div className="form-group mb-0 w-25" style={{paddingBottom: "5px"}}>
            <label for={props.id}><strong>{props.label}</strong></label>
            <input id={props.id}
                   type={props.type}
                   name={props.name}
                   placeholder={props.placeholder}
                   value={props.value ?? ""}
                   className="form-control"
                   onChange={props.onChange}/>
        </div>
    );
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
