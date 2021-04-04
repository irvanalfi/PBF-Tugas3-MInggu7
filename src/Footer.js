import React from 'react';

class Footer extends React.Component { 
    render(){
        return(
            <div class="pt-5">
            <nav class="navbar navbar-light bg-warning">
                <div class="container row">
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-4">
                        <div class="container container-fluid">
                            <h6 class="navbar-brand" >Footer Tugas Tiga</h6>
                            <a class="navbar-brand">Phone</a><br></br>
                            <p class="text-dark">+6282244922833</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="container container-fluid">
                        <br></br><br></br>
                            <a class="navbar-brand">Adress</a>
                            <p class="text-dark">Jl. React, Songgon, Banyuwangi</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="container container-fluid">
                        <br></br><br></br>
                            <a class="navbar-brand">Contact Us</a>
                            <p class="text-dark">react@maila.com</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="pb-5"></div>
        </div>
        );
    }
}

export default Footer;