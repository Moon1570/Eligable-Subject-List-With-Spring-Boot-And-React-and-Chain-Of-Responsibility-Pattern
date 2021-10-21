import React, { Component } from 'react';



class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
  
    render() {
        return (
            <div>
                 <header className="header nav">
                        <h1 classNam="pad10"><a href="http://localhost:3000/" className="navbar-brand">Subject Eligability Checker</a></h1>

                </header>
            </div>
        );
    }
}



export default HeaderComponent;