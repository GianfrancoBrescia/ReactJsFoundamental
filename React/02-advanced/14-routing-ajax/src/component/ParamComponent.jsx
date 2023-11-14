import {useParams} from "react-router-dom"
import React from 'react'


/*
class Param extends React.Component{
    componentDidMount(){
       // const {mioparametro} = useParams()
       const {mioparametro} = this.props.params

    }

    render(){   
    return(
        <div>
            <h1>Param</h1>
        </div>
    )
}
}


export default Param
*/


const Param = () => {
    const {mioparametro} = useParams();
    console.log(mioparametro)
    return (
        <div>
            <h1>Param</h1>
        </div>
    )
}


export default Param

