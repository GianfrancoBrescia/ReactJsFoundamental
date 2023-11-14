import React from 'react'
import {Component} from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {elemento: ""}
        this.handleSave = this.handleSave.bind(this)
        this.miocampoInput = null

        //fun<ione di callback
        this.setMiocampoinput = elemento => {
            this.miocampoInput = elemento
        }
    }

    handleSave(ev) {
        //asincrono!!
        // this.setState({elemento:this.miocampoInput.value})
        this.props.callback(this.miocampoInput.value)
        ev.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handleSave}>
                <input type="text" ref={this.setMiocampoinput} id="mioCampo" placeholder="Scrivi qualcosa..."/>
                <button type="submit">Inserisci</button>
            </form>
        )
    }
}


export default Form
