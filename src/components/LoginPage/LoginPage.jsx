import React from "react";

import logoIBIK from "../../assets/img/logoIBIK.png"
import "./LoginPage.css"

function LoginPage(){
    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="card card-login" style={{width:"18rem"}}>
                <div className="card-body ">
                <center>
                    <p className="card-text">Login</p>
                    <p className="card-text"><i>E-Book</i> IBI Kesatuan</p>
                    <img src={logoIBIK} alt="Logo IBIK" className="LogoIBIK"/>
                </center>
                    <div className="col input-area">
                        <label className="form-label">NPM</label>
                        <input type="text" placeholder="Masukkan NPM" className="form-control form-control-sm" />
                    </div>
                    <div className="col input-area">
                        <label className="form-label" >Password</label>
                        <input type="text"placeholder="Masukkan Password" className="form-control form-control-sm" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage;