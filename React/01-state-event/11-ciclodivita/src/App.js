import './App.css';
import TodoList from './component/TodoList'
import React from 'react'
import Form from './component/Form'

class App extends React.Component {

    constructor(props) {
        super(props)
        const todos = ["primo", "secondo", "terzo", "quarto", "quinto"]
        this.state = {lista: todos}
        this.inserisciElemento = this.inserisciElemento.bind(this)
        this.eliminaElemento = this.eliminaElemento.bind(this)
    }


    //chiamata di callback
    inserisciElemento(elem) {
        let newLista = this.state.lista
        newLista.push(elem)
        this.setState({lista: newLista})

    }

    eliminaElemento(elem) {
        let newLista = this.state.lista
        newLista.splice(elem, 1)
        this.setState({lista: newLista})
    }


    render() {
        return (<div className="App">
                <Form callback={this.inserisciElemento}/>
                <TodoList callback={this.eliminaElemento} lista={this.state.lista}/>

            </div>
        )
    }
}


export default App;
