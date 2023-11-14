import {Subject} from 'rxjs'

const subject = new Subject()

export const messageService = {
    mandaMessaggio: messaggio => subject.next({text: messaggio}),
    pulisciMessaggi: () => subject.next(),
    ottieniMessaggi: () => subject.asObservable()   //per mettersi in ascolto
}
