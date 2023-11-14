import React, {useEffect, useState} from "react"
import axios from 'axios'

const url = "http://localhost:8000/api/note"

const Home = () => {
    const [note, setNote] = useState([])
    useEffect(() => {
        //  fetch(url).then(risposta=>risposta.json()).then(n=>setNote({note:n}))
        axios.get(url).then((n) => setNote({note: n.data}))
    })
    return (
        <div>
            <h1>Home</h1>
            <h3>{JSON.stringify(note)}</h3>
        </div>
    )
}

export default Home
