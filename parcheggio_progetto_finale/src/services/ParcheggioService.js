import axios from "axios";

export default class ParcheggioService {
    static baseUrl = "http://localhost:8000/api/parcheggi";

    static getAllParcheggi() {
        return axios.get(this.baseUrl).then(r => r.data);
    }

    static inserisciParcheggio(body) {
        return axios.post(this.baseUrl, body).then();
    }

    static modificaParcheggio(id, body) {
        return axios.put(`${this.baseUrl}/${id}`, body).then();
    }

    static eliminaParcheggio(id) {
        return axios.delete(`${this.baseUrl}/${id}`).then();
    }
}
