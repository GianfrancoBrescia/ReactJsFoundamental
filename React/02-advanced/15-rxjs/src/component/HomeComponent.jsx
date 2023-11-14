import React from "react"
import {messageService} from '../_services'

const Home = () => {

    const mandamessaggio = () => {
        console.log("mandamessaggio");
        messageService.mandaMessaggio("Messaggio dal figlio")
    }

    const puliscimessaggio = () => {
        console.log("puliscimessaggio");
        messageService.pulisciMessaggi();
    }

    return (
        <div>
            <h1>Home Component </h1>
            <button onClick={mandamessaggio}>Manda Messaggio al padre</button>
            <button onClick={puliscimessaggio}>Pulisci Messaggi</button>
        </div>
    )
}


export default Home
