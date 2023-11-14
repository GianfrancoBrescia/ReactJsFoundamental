import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <div style={{paddingTop: "5px"}}>
            <button
                type={"button"}
                onClick={props.onClick}
                className="btn btn-primary">
                {props.label}
            </button>
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    label: null,
    onClick: () => undefined
};
