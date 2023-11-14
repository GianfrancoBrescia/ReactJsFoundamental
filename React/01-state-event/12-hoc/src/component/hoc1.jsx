import React from 'react'

var dati = {
    data: "FUNZIONI DI PIU ALTO ORDINE"
}

const MioHOC = (ComponenteComposto) => {
    class _MioHOC extends React.Component {

        componentDidMount() {
            this.setState({info: dati.data})
        }

        render() {
            return <ComponenteComposto {...this.props} {...this.state}/>
        }

    }
    return _MioHOC
}

export default MioHOC
