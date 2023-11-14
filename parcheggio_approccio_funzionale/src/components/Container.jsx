import React from "react";
import Input from "./Input";
import Button from "./Button";
import CustomTable from "./CustomTable";
import Banner from "./Banner";

export default function Container() {
    const [obj, setObj] = React.useState({
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

    const handleSave = () => {
        if (obj.auto.targa) {
            if (obj.indexRowToEdit != null || !obj.objectTable.rows.find(r => r.targa === obj.auto.targa)) {
                let listaAutoClone = {...obj.objectTable};

                if (obj.indexRowToEdit != null) listaAutoClone.rows[obj.indexRowToEdit] = obj.auto;
                else listaAutoClone.rows.push(obj.auto);

                setObj({
                    ...obj,
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
            let objectTableClone = {...obj.objectTable};
            objectTableClone.rows.splice(indexRowToDelete, 1);
            setObj({
                ...obj,
                objectTable: objectTableClone
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

            <Input id="1"
                   label="Nome"
                   name="nomeProprietario"
                   type="text"
                   placeholder="Inserisci nome proprietario"
                   value={obj.auto.nomeProprietario}
                   onChange={(e) => changeInput(e.target.name, e.target.value)}/>

            <Input id="2"
                   label="Cognome"
                   name="cognomeProprietario"
                   type="text"
                   placeholder="Inserisci cognome proprietario"
                   value={obj.auto.cognomeProprietario}
                   onChange={(e) => changeInput(e.target.name, e.target.value)}/>

            <Input id="3"
                   label="Email"
                   name="emailProprietario"
                   type="text"
                   placeholder="Inserisci email proprietario"
                   value={obj.auto.emailProprietario}
                   onChange={(e) => changeInput(e.target.name, e.target.value)}/>

            <Input id="4"
                   label="Telefono"
                   name="telefonoProprietario"
                   type="text"
                   placeholder="Inserisci telefono proprietario"
                   value={obj.auto.telefonoProprietario}
                   onChange={(e) => changeInput(e.target.name, e.target.value)}/>

            <Input id="5"
                   label="Targa"
                   name="targa"
                   type="text"
                   placeholder="Inserisci targa auto"
                   value={obj.auto.targa}
                   onChange={(e) => changeInput(e.target.name, e.target.value)}/>

            <Button id="6"
                    label={obj.indexRowToEdit != null ? "Modifica" : "Salva"}
                    onClick={handleSave}/><br/><br/>

            <CustomTable id="7"
                         columns={obj.objectTable.columns}
                         rows={obj.objectTable.rows}
                         editRow={onEditAuto}
                         deleteRow={onDeleteAuto}/>
        </div>
    );
}
