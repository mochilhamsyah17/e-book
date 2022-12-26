import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BeforeLogin.css";

import book1 from "../../assets/img/bookSI1.jpg"
import book2 from "../../assets/img/bookSI2.jpg"
import book3 from "../../assets/img/bookSI3.jpg"

function BeforeLogin(){

        const [dataBuku, setDataBuku] = useState([]);

        useEffect(()=>{
            axios.get('https://63a91874f4962215b58d12ba.mockapi.io/dataBuku')
            .then(res => {
                console.log(res.data)
                setDataBuku(res.data)
            })
        },[]);
    
    return(
        <>
        <div className="d-flex justify-content-between e-book-jurusan">
            <p>
                <b><i>E-Book</i> Sistem Informasi</b>
            </p>
            <button className="btn btn-outline-dark btn-sm" style={{marginBottom: "2vh"}}>Lihat lebih banyak..</button>
        </div>
            <div className="templateCard d-flex justify-content-center">
                <div className="card" style={{width: "18rem"}}>
                    <img src={book1} className="card-img-top ImgSize" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Pengantar Sistem Informasi</h5>
                        <div className="d-flex flex-column size-deskripsi-card">
                            <a>Jurusan : Sistem Informasi</a>
                            <a>Tahun buku : 2019</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={book2} className="card-img-top ImgSize" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Pengantar Sistem Informasi</h5>
                        <div className="d-flex flex-column size-deskripsi-card">
                            <a>Jurusan : Sistem Informasi</a>
                            <a>Tahun buku : 2019</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={book3} className="card-img-top ImgSize" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sistem Informasi Bisnis</h5>
                        <div className="d-flex flex-column size-deskripsi-card">
                            <a>Jurusan : Sistem Informasi</a>
                            <a>Tahun buku : 2019</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeforeLogin;