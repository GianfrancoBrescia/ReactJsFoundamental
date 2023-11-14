import React, {useEffect, useState} from "react";
import Input from "./Input";
import Button from "./Button";
import CustomTable from "./CustomTable";
import Banner from "./Banner";
import ParcheggioService from "../services/ParcheggioService";
import * as _ from "lodash";

export default function Container() {
    const [obj, setObj] = useState({
        auto: {
            id: null,
            nome: null,
            cognome: null,
            email: null,
            telefono: null,
            targa: null
        },
        indexRowToEdit: null,
        objectTable: {
            columns: ['', '', "NOME", "COGNOME", "EMAIL", "TELEFONO", "TARGA"],
            rows: []
        },
        warning: {
            show: false,
            type: '',
            title: '',
            text: ''
        }
    });

    useEffect(() => {
        const prevRows = JSON.parse(localStorage.getItem("rows"));
        if (prevRows == null || !_.isEqual(obj.objectTable.rows, prevRows)) {
            ParcheggioService.getAllParcheggi().then(r => {
                localStorage.setItem("rows", JSON.stringify(r));
                setObj({
                    ...obj,
                    objectTable: {
                        columns: obj.objectTable.columns,
                        rows: r
                    }
                });
            })
        }
    });

    const changeInput = (field, value) => {
        setObj({
            ...obj,
            auto: {
                ...obj.auto,
                [field]: value
            }
        });
    }

    const aggiornaObj = (table) => {
        setObj({
            ...obj,
            auto: {
                id: null,
                nome: null,
                cognome: null,
                email: null,
                telefono: null,
                targa: null
            },
            indexRowToEdit: null,
            objectTable: table
        });
    }

    const handleSave = () => {
        if (obj.auto.targa) {
            if (obj.indexRowToEdit != null) {
                let table = {...obj.objectTable};
                table.rows[obj.indexRowToEdit] = obj.auto;
                ParcheggioService.modificaParcheggio(obj.auto.id, obj.auto).then(() => aggiornaObj(table));
            } else if (!obj.objectTable.rows.find(r => r.targa === obj.auto.targa)) {
                let table = {...obj.objectTable};
                table.rows.push(obj.auto);
                ParcheggioService.inserisciParcheggio(obj.auto).then(() => aggiornaObj(table));
            } else {
                const warning = {
                    show: true,
                    type: "warning",
                    title: "Attenzione!",
                    text: "Non è possibile inserire una stessa targa auto"
                };
                setObj({
                    ...obj,
                    warning
                });
            }
        } else {
            const warning = {
                show: true,
                type: "danger",
                title: "Errore!",
                text: "Nessuna targa auto inserita"
            };
            setObj({
                ...obj,
                warning
            });
        }
    }

    const getIndexByCarLicensePlateValue = (value) => {
        let objectTableClone = {...obj.objectTable};
        return objectTableClone.rows.findIndex(r => r.targa === value);
    }

    const onEditAuto = (targa) => {
        const indexRowToEdit = getIndexByCarLicensePlateValue(targa);
        setObj({
            ...obj,
            auto: obj.objectTable.rows[indexRowToEdit],
            indexRowToEdit: indexRowToEdit
        });
    }

    const onDeleteAuto = (targa) => {
        const indexRowToDelete = getIndexByCarLicensePlateValue(targa);
        if (indexRowToDelete > -1) {
            ParcheggioService.eliminaParcheggio(obj.objectTable.rows[indexRowToDelete].id).then(() => {
                let objectTableClone = {...obj.objectTable};
                objectTableClone.rows.splice(indexRowToDelete, 1);
                setObj({
                    ...obj,
                    objectTable: objectTableClone
                });
            });
        }
    }

    return (
        <div>
            <Banner type={obj.warning.type}
                    title={obj.warning.title}
                    text={obj.warning.text}
                    show={obj.warning.show}
                    onClose={() => {
                        const warning = {
                            show: false,
                            type: null,
                            title: null,
                            text: null
                        };
                        setObj({
                            ...obj,
                            warning
                        });
                    }}/>

            <h1>Parcheggio auto</h1>
            <div className="row">
                <Input id="1"
                       label="Nome"
                       name="nome"
                       type="text"
                       placeholder="Inserisci nome proprietario"
                       value={obj.auto.nome}
                       onChange={(e) => changeInput(e.target.name, e.target.value)}/>

                <Input id="2"
                       label="Cognome"
                       name="cognome"
                       type="text"
                       placeholder="Inserisci cognome proprietario"
                       value={obj.auto.cognome}
                       onChange={(e) => changeInput(e.target.name, e.target.value)}/>
            </div>
            <div className="row">
                <Input id="3"
                       label="Email"
                       name="email"
                       type="text"
                       placeholder="Inserisci email proprietario"
                       value={obj.auto.email}
                       onChange={(e) => changeInput(e.target.name, e.target.value)}/>

                <Input id="4"
                       label="Telefono"
                       name="telefono"
                       type="text"
                       placeholder="Inserisci telefono proprietario"
                       value={obj.auto.telefono}
                       onChange={(e) => changeInput(e.target.name, e.target.value)}/>
            </div>
            <Input id="5"
                   label="Targa"
                   name="targa"
                   type="text"
                   placeholder="Inserisci targa auto"
                   value={obj.auto.targa}
                   onChange={(e) => changeInput(e.target.name, e.target.value)}/>

            <Button id="6"
                    label={obj.indexRowToEdit != null ? "Modifica" : "Salva"}
                    type="button"
                    onClick={handleSave}/><br/><br/>

            <CustomTable id="7"
                         columns={obj.objectTable.columns}
                         rows={obj.objectTable.rows}
                         editRow={onEditAuto}
                         deleteRow={onDeleteAuto}/>
        </div>
    );
}
