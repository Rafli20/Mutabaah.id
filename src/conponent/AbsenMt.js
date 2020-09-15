import React from 'react'
import axios from 'axios'

class AbsenMt extends React.Component {
    state = {
        nama: "",
        surat: "",
        ayat: "",
        juz: "",
        tanggal: ""
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handlerSubmit = async () => {
        await axios.post('http://localhost:8000/mutabaah', this.state)
    }

    render() {
        return (
            <div className="jumbotron">
                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td> Nama </td>
                                <td>
                                    <input
                                        className="input"
                                        type="text"
                                        name="nama"
                                        onChange={this.handlerChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> Surat </td>
                                <td>
                                    <input
                                        className="input"
                                        type="text"
                                        name="surat"
                                        onChange={this.handlerChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> Ayat </td>
                                <td>
                                    <input
                                        className="input"
                                        type="text"
                                        name="ayat"
                                        onChange={this.handlerChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> Juz </td>
                                <td>
                                    <input
                                        className="input"
                                        type="text"
                                        name="juz"
                                        onChange={this.handlerChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> Tanggal </td>
                                <td>
                                    <input
                                        className="input"
                                        type="text"
                                        name="tanggal"
                                        onChange={this.handlerChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        className="input"
                                        type="submit"
                                        name="enter"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        )
    }
}

export default AbsenMt;