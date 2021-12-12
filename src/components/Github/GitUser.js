import React, { useEffect, useState } from 'react'
import GithubUser from "./GithubUser"
// import axios from "axios";


const GitUser = () => {
    const [Users, setUsers] = useState([])
    const Getuser = async () => {
        try {
            const response = await fetch("https://api.github.com/users")
            console.log(response);
           const data = await response.json();
            setUsers(data)
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        Getuser()
    }, []);
    return (
        <div>
            <GithubUser Users={Users} />
        </div>
    )
}
export default GitUser

