import React from "react";

import "./navbar.css"
import logoIBIK from "../../assets/img/logoIBIK.png"

function navbarMain(){
    return(
        <>
            <nav className="navbar" id="navbar-bg">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{color:"white"}}>
                        <img src={logoIBIK} alt="logoIBIK" className="logoIBIK-navbar"></img>
                        <a className="titleNavbar"><i>E-Book</i> IBI Kesatuan</a>
                    </a>
                    <div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Cari Buku" aria-label="Search"/>
                            <button className="btn btn-outline-light login-btn">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbarMain;