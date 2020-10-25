import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './Components/DirectoryComponent';
import './App.css';
import { TECH } from './shared/tech';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tech: TECH
        };
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Internet of Things Field Notebook</NavbarBrand>
                </div>
                </Navbar>
                <Directory tech={this.state.tech} />
                
            </div>
        );
    }
}

export default App;
