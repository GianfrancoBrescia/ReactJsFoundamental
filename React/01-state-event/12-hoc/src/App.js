import './App.css';
import React from 'react'
import MyComponent1 from './component/comp1'
import MyComponent2 from './component/comp2'
import MioHOC from './component/hoc1'


import Button from './component/Button'
import AdvancedButton from './component/AdvancedButton';


const Comp1 = MioHOC(MyComponent1)
const Comp2 = MioHOC(MyComponent2)


const FinalButton = AdvancedButton(Button)


function App() {

    return (<div className="App">
            <Comp1/>
            <Comp2/>
            <FinalButton handleClick={() => {
                console.log("final button")
            }}/>
        </div>
    )
}

export default App;
