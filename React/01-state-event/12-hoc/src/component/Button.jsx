import PropTypes from 'prop-types'

var Button = (props) => <button onClick={props.handleClick}>Submit</button>
Button.propType = {
    handleClick: PropTypes.func.isRequired
}

export default Button
