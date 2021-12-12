import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import "./navbar.css"
const Navbar = (props) => {
    const LogOutHandler=()=>{
        props.Settoken(false);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light"style={{backgroundColor:'grey'}}>
                <Link className="navbar-brand" to="/">
                    <img style={{ height: '40px', width: '40px' }} src="logo192.png" alt={props.title} />
                </ Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=".bg-white navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link .bg-white" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link .bg-white" to="/Todo">TodoList</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link .bg-white" to="/Contact">ContactUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link .bg-white" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link .bg-white" to="/Registration">Resistration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link .bg-white" to="/Textconverter">TextConverter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link .bg-white" to="/GitUser">GitUser</Link>
                        </li>
                    </ul>
                    {/* <button onClick={LogOutHandler}>LogOut</button> */}
                    <button type="button"onClick={LogOutHandler}class="btn btn-secondary">LogOut</button>

                </div>
            </nav>
        </>
    )
};

export default Navbar
