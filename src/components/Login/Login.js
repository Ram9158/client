import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState(); 
    const history = useHistory();

    useEffect(() => {
        document.title = "Login_Page || My app"
    }, []);

    const UsersubmitHandler = (e) => {
        e.preventDefault()
        if (Email.trim().length === 0 || Password.length === 0) {
            return;
        }
        if (+Password < 6) {
            return ;
        }else{
        history.push("/Home");
        console.log(Email)
        console.log(Password)
        setEmail('')
        setPassword('')
        props.Settoken(true)}
    }
    const Emailhandler = (event) => {
        setEmail(event.target.value);
    }
    const Passwordhandler = (event) => {
        setPassword(event.target.value);
    }


    return (
        <div className='main-div'>
            <form className="form-group text-center" onSubmit={UsersubmitHandler} >

                <div className="form-group  ">
                    <label htmlFor="email">Email address</label>
                    <input name="email" autoComplete="off" type="email" value={Email} onChange={Emailhandler} className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password"className="my-3">Password</label>
                    <input name="password" autoComplete="on" type="password" value={Password} onChange={Passwordhandler} className="form-control" id="Password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary my-4">Submit</button>
                <div>
                    <NavLink to="/Registration" >Create an account</NavLink>
                </div>
            </form>
        </div>
    )
}


export default Login
