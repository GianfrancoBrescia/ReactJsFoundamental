import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Pencil, Trash} from "react-bootstrap-icons";
import CustomTooltip from "./CustomTooltip";
import PropTypes from "prop-types";

export default class CustomTable extends Component {

    render() {
        return <div>
            <Table id={this.props.id} responsive striped bordered hover>
                <thead>
                <tr>
                    <th colSpan={2} style={{width: "3%"}}/>
                    {this.props.columns.slice(2).map(c => <th key={`opzione ${c}`}>{c}</th>)}
                </tr>
                </thead>
                <tbody>
                {!this.props.rows.length
                    ? <tr>
                        <td colSpan={this.props.columns.length} className="text-center">Nessuna auto presente
                            nella lista
                        </td>
                    </tr>
                    : this.props.rows.map((r, i) => {
                        const numeroTarga = new RegExp(/^[A-Z]{2}(.*?)[A-Z]{2}$/).exec(r.targa) || new RegExp(/.*(\d)$/).exec(r.targa);
                        let style = {}
                        if (numeroTarga != null) {
                            const isNumeroTargaPari = numeroTarga[1].slice(-1) % 2 === 0;
                            style = {backgroundColor: isNumeroTargaPari ? "lightgreen" : "red"};
                        }
                        return <tr key={`opzione ${i}`} style={style}>
                            <td style={{width: "3%", textAlign: "center"}}>
                                <CustomTooltip
                                    placement="top"
                                    text="Modifica"
                                    content={<Pencil width="20" height="20" cursor="pointer"
                                                     onClick={() => this.props.editRow(r.targa)}/>}
                                />
                            </td>
                            <td style={{width: "3%", textAlign: "center"}}>
                                <CustomTooltip
                                    placement="top"
                                    text="Elimina"
                                    content={<Trash width="20" height="20" cursor="pointer"
                                                    onClick={() => this.props.deleteRow(r.targa)}/>}
                                />
                            </td>
                            <td>{r.nomeProprietario}</td>
                            <td>{r.cognomeProprietario}</td>
                            <td>{r.emailProprietario}</td>
                            <td>{r.telefonoProprietario}</td>
                            <td>{r.targa}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    }
}

CustomTable.propTypes = {
    id: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object),
    editRow: PropTypes.func,
    deleteRow: PropTypes.func
};

CustomTable.defaultProps = {
    rows: [],
    editRow: () => undefined,
    deleteRow: () => undefined
};
