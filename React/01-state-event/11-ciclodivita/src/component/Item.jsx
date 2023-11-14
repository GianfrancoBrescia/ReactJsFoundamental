import React from 'react'

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.elimina = this.elimina.bind(this)
        //console.log("constructor")

    }


    /*
       LIFECYCLE

        //Montaggio
        1 constructor
        2 getDerivedStateFromProps
        3 render
        4 componentDidMount


        //Aggiornamento
        1 getDerivedStateFromProps quando lo state viene aggiornato
        2 shouldComponenteUpdate
        3 render
        4 getSnapshotBeforeUpdate
        5 componentDidUpdate
       */

    /*
      static getDerivedStateFromProps(props,state){
          console.log("getDerivedStateFromProps",props,state)

      }


      componentDidMount(){
          console.log("componentDidMount")
      }



  */

    elimina(ev) {
        this.props.callback(ev.target.id)
    }


    render() {
        //   console.log("render")
        return <li>{this.props.elemento}
            <button onClick={this.elimina} id={this.props.elemento}>Elimina</button>
        </li>
    }

    componentWillUnmount() {
        console.log("compnentWillUnmount")
    }


}


export default Item
