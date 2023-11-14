import React from 'react'
import Item from './Item'

class TodoList extends React.Component {


    //Aggiornamento
    /*1 getDerivedStateFromProps quando lo state viene aggiornato
    2 shouldComponenteUpdate
    3 render
    4 getSnapshotBeforeUpdate
    5 componentDidUpdate
   */

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", props, state)
    }

    shouldComponentUpdate() {
        console.log("shouldComponenteUpdate")
        if (this.props.lista.includes("nonaggiornare"))
            return false
        return true
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render")
        return (
            <ul>
                {this.props.lista.map((elem) => <Item key={elem} elemento={elem} callback={this.props.callback}/>)}
            </ul>
        )
    }

}


export default TodoList
