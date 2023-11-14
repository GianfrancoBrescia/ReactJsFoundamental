import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <div style={{paddingTop: "5px"}}>
            <button
                id={props.id}
                type={props.type}
                onClick={props.onClick}
                className="btn btn-primary">
                {props.label}
            </button>
        </div>
    );
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
    onClick: PropTypes.func.isRequired
};
