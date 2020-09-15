import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../css/DataMt.css'
import axios from 'axios'



class DataMt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: []
        }
    }
    async componentDidMount() {
        await axios.get("http://localhost:8000/mutabaah")
            .then(Response => this.setState({
                Data: Response.data
            }))
        console.log(this.state)
    }


    render() {
        const { Data } = this.state
        async function Delete() {
            await axios.delete("http://localhost:8000/mutabaah?id=" + Data.id)
        }
        return (
            <div>
                <div className="jumbotron container">
                    <table class="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th scope="col" className="tgl">No.</th>
                                <th scope="col" className="tgl">Nama</th>
                                <th scope="col" className="tgl">Surat</th>
                                <th scope="col" className="tgl">Ayat</th>
                                <th scope="col" className="tgl">Juz</th>
                                <th scope="col" className="tgl">Tanggal/Bulan/Tahun</th>
                                <th scope="col" className="tgl">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((Data) => {
                                return <div key={Data.id}>
                                    <tr>
                                        <th scope="row" className="tgl"> {Data.id} </th>
                                        <td className="tgl"> {Data.nama} </td>
                                        <td className="tgl"> {Data.surat} </td>
                                        <td className="tgl"> {Data.ayat} </td>
                                        <td className="tgl"> {Data.juz} </td>
                                        <td className="tgl"> {Data.tanggal} </td>
                                        <td className="tgl">
                                            <FontAwesomeIcon className="text-white" aria-hidden="true" icon={faTrash} onClick={Delete} />
                                        </td>
                                    </tr>
                                </div>
                            })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DataMt;