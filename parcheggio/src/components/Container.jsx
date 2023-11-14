import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";
import CustomTable from "./CustomTable";
import Banner from "./Banner";

export default class Container extends Component {

    constructor(props) {
        super(props);

        this.changeInput = this.changeInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.onEditAuto = this.onEditAuto.bind(this);
        this.onDeleteAuto = this.onDeleteAuto.bind(this);

        this.state = {
            auto: {
                id: null,
                nomeProprietario: null,
                cognomeProprietario: null,
                emailProprietario: null,
                telefonoProprietario: null,
                targa: null
            },
            indexRowToEdit: null,
            objectTable: {
                columns: ['', '', "NOME", "COGNOME", "EMAIL", "TELEFONO", "TARGA"],
                rows: []
            },
            warning: {
                show: false,
                type: null,
                title: null,
                text: null
            }
        }
    }

    changeInput(event) {
        let autoClone = {...this.state.auto};
        autoClone[event.target.name] = event.target.value;
        this.setState({auto: autoClone});
    }

    handleSave() {
        if (this.state.auto.targa) {
            if (this.state.indexRowToEdit != null || !this.state.objectTable.rows.find(r => r.targa === this.state.auto.targa)) {
                let listaAutoClone = {...this.state.objectTable};

                if (this.state.indexRowToEdit != null) listaAutoClone.rows[this.state.indexRowToEdit] = this.state.auto;
                else listaAutoClone.rows.push(this.state.auto);

                this.setState({
                    auto: {
                        id: null,
                        nomeProprietario: null,
                        cognomeProprietario: null,
                        emailProprietario: null,
                        telefonoProprietario: null,
                        targa: null
                    },
                    indexRowToEdit: null,
                    objectTable: listaAutoClone
                });
            } else {
                const warning = {
                    show: true,
                    type: "warning",
                    title: "Attenzione!",
                    text: "Non è possibile inserire una stessa targa auto"
                };
                this.setState({warning});
            }
        } else {
            const warning = {
                show: true,
                type: "danger",
                title: "Errore!",
                text: "Nessuna targa auto inserita"
            };
            this.setState({warning});
        }
    }

    getIndexByCarLicensePlateValue(value) {
        let objectTableClone = {...this.state.objectTable};
        return objectTableClone.rows.findIndex(r => r.targa === value);
    }

    onEditAuto(targa) {
        const indexRowToEdit = this.getIndexByCarLicensePlateValue(targa);
        this.setState({auto: this.state.objectTable.rows[indexRowToEdit], indexRowToEdit: indexRowToEdit});
    }

    onDeleteAuto(targa) {
        const indexRowToDelete = this.getIndexByCarLicensePlateValue(targa);
        if (indexRowToDelete > -1) {
            let objectTableClone = {...this.state.objectTable};
            objectTableClone.rows.splice(indexRowToDelete, 1);
            this.setState({objectTable: objectTableClone});
        }
    }

    render() {
        return (
            <div>
                <Banner type={this.state.warning.type}
                        title={this.state.warning.title}
                        text={this.state.warning.text}
                        show={this.state.warning.show}
                        onClose={() => {
                            const warning = {
                                show: false,
                                type: null,
                                title: null,
                                text: null
                            };
                            this.setState({warning});
                        }}/>

                <h1>Parcheggio auto</h1>

                <Input id="1"
                       label="Nome"
                       name="nomeProprietario"
                       type="text"
                       placeholder="Inserisci nome proprietario"
                       value={this.state.auto.nomeProprietario}
                       onChange={this.changeInput}/>

                <Input id="2"
                       label="Cognome"
                       name="cognomeProprietario"
                       type="text"
                       placeholder="Inserisci cognome proprietario"
                       value={this.state.auto.cognomeProprietario}
                       onChange={this.changeInput}/>

                <Input id="3"
                       label="Email"
                       name="emailProprietario"
                       type="text"
                       placeholder="Inserisci email proprietario"
                       value={this.state.auto.emailProprietario}
                       onChange={this.changeInput}/>

                <Input id="4"
                       label="Telefono"
                       name="telefonoProprietario"
                       type="text"
                       placeholder="Inserisci telefono proprietario"
                       value={this.state.auto.telefonoProprietario}
                       onChange={this.changeInput}/>

                <Input id="5"
                       label="Targa"
                       name="targa"
                       type="text"
                       placeholder="Inserisci targa auto"
                       value={this.state.auto.targa}
                       onChange={this.changeInput}/>

                <Button id="6"
                        label={this.state.indexRowToEdit != null ? "Modifica" : "Salva"}
                        onClick={this.handleSave}/><br/><br/>

                <CustomTable id="7"
                             columns={this.state.objectTable.columns}
                             rows={this.state.objectTable.rows}
                             editRow={this.onEditAuto}
                             deleteRow={this.onDeleteAuto}/>
            </div>
        );
    }
}
