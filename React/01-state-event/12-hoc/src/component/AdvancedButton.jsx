import React from "react"

function AdvancedButton(Component) {
    class _AdvancedButton extends React.Component {

        constructor(props) {
            super(props)
        }

        handleAdvanced() {
            console.log("handleAdvanced")
        }

        render() {
            return (<Component {...this.props}/>)
        }

    }
    _AdvancedButton.propTypes = Component.propTypes
    return _AdvancedButton
}

export default AdvancedButton
