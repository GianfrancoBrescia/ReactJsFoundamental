import './App.css';
import React from 'react'
import Home from './component/HomeComponent'
import About from './component/AboutComponent'
import Param from './component/ParamComponent'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'

function App() {

    const parametro = "Pippo"

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to={"/param/" + parametro}>Param</Link></li>
                    </ul>

                    <hr/>
                    inizio
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/param/:mioparametro" element={<Param/>}/>
                    </Routes>
                    fine
                </div>
            </div>
        </Router>
    )
}

export default App;
