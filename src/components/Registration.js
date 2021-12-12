import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Registration = () => {
    const [username, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userWork, setUserWork] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirm, setUserConfirm] = useState("");

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const EmailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    }
    const PhoneChangeHandler = (event) => {
        setUserPhone(event.target.value);
    }
    const WorkChangeHandler = (event) => {
        setUserWork(event.target.value);
    }
    const PasswordChangeHandler = (event) => {
        setUserPassword(event.target.value);
    }
    const CChangeHandler = (event) => {
        setUserConfirm(event.target.value);
    }

    const SubmitHandler = (Event) => {
        Event.preventDefault()              ///////Main function
        console.log(username)
        const Data = {
            Name: username,
            Email: userEmail,
            Phone: userPhone,
            Work: userWork,
            Password: userPassword,
            Conform: userConfirm
        }
        console.log(Data);
        
        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setUserWork('')
        setUserPassword('')
        setUserConfirm('')


    }




    // const nameChangeHandler = (event)=>{

    //     setUserinput({
    //         ...userInput,
    //         name:event.target.value

    //     })
    // }

    // useEffect(() => {
    //     document.title = "Registration_Page || My app"
    // },[]);
    const styleObj = {
        width: "80%",
        height: "100vh",
        backgroundcolor:" #698399",
        paddingTop: "50px",

    }
    // const styleObj1 = {
    //     fontSize: 14,
    //     color: "#4a54f1",
    //     textAlign: "center",
    //     paddingTop: "100px",
    // }
    
    return (
        <div style={styleObj}>

            <form className="text-center container bg-red" onSubmit={SubmitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={username}
                            onChange={nameChangeHandler}
                            autoComplete="off"
                            className="form-control"
                            id="name"
                            placeholder="Name" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="email">Email</label>
                        <input
                            value={userEmail}
                            type="email"
                            onChange={EmailChangeHandler}
                            autoComplete="off" className="form-control"
                            id="email"
                            placeholder="Email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="phone">Phone</label>
                        <input
                            value={userPhone}
                            type="text"
                            onChange={PhoneChangeHandler}
                            autoComplete="off"
                            className="form-control"
                            id="phone"
                            placeholder="Phone" />
                    </div>
                    <div className="form-group col-md-6 ">
                        <label htmlFor="work">Work</label>
                        <input
                            value={userWork}
                            type="text"
                            onChange={WorkChangeHandler}
                            autoComplete="off"
                            className="form-control"
                            id="work"
                            placeholder="Work" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="password">Password</label>
                        <input
                            value={userPassword}
                            type="password"
                            name="password"
                            autoComplete="on"
                            onChange={PasswordChangeHandler}
                            className="form-control"
                            id="password"
                            placeholder="Password" />
                    </div>
                    <div className="form-group col-md-3 ">
                        <label htmlFor="Cpassword">Confirm-password</label>
                        <input
                            type="password"
                            name="password"
                            autoComplete="on"
                            value={userConfirm}
                            onChange={CChangeHandler}
                            className="form-control"
                            id="cpassword"
                            placeholder="Confirm-password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary my-3">Registration</button>
                <br />
                <div className="text-center my-1">
                    <NavLink to="/Login">I Am Already Register</NavLink>
                </div>
            </form>
        </div>
    )
}
export default Registration
