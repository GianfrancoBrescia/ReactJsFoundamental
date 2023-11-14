import './App.css';
import React from 'react'
import Home from './component/HomeComponent'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'
import {messageService} from './_services'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {messaggi: []}
        this.sottoscrizione = ''
    }

    componentDidMount() {
        this.sottoscrizione = messageService.ottieniMessaggi().subscribe((messaggio) => {
            console.log("ottieniMessaggi", messaggio)
            if (messaggio) {
                this.setState({messaggi: [...this.state.messaggi, messaggio.text]})
            } else {
                this.setState({messaggi: []})
            }
        })
    }

    componentWillUnmount() {
        this.sottoscrizione.unsubscribe();
    }

    render() {
        const {messaggi} = this.state
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                        </ul>

                        <hr/>
                        {messaggi.map((msg, idx) => <div key={idx}>{msg}</div>)}
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
