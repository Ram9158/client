import React from 'react'
import'./git.css'


const GithubUser = ({ Users }) => {
    return (
        <div className='Maindiv'>
            <h2 className="text-center pt-3">List of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        Users.map((curElem) => {
                            const { avatar_url, id, login, type } = curElem;
                            return (
                                <div className="col-10 col-md-4 mt-5" key={id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"> <img src={avatar_url} alt="my" className="rounded" width="155" /> </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                                                <span className="text-left">{type}</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="followers">Followers</span> <span className="number2">34</span> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        </div>
    )
}


export default GithubUser

