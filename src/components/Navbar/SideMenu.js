import React, { useState } from 'react'
// import logo from "../assets/logo/favicon.ico"
// import Arrow from "../assets/Arrow.png"
// import CompanyForm from './CompanyForm'
import './SideMenu.css'
import { Link } from 'react-router-dom'
const SideMenu = () => {
    const [inactive, setinactive] = useState(false)
    return (
        <div className="">
            <div className="row">
                <div className="col-3">
                    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
                        <div className="top-section">
                            <div className="logo">
                                <div className="Togglebtn" onClick={() => { setinactive(!inactive) }} >
                                    {inactive ? <i className="bi bi-arrow-right-square-fill"></i> : <i className="bi bi-arrow-left-square-fill"></i>}
                                </div>
                            </div>
                        </div>
                        <div className="search-controller">
                            <div className="search-btn">
                                <i className="bi bi-search"></i>
                            </div>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="divider"></div>

                        <div className='main-menu'>
                            <ul>
                                <li>
                                    <Link className='menu-item'>
                                        <div className="menu-icon">
                                            <i className="bi bi-speedometer2"></i>
                                        </div>
                                        Company-List
                                    </Link>
                                </li>
                                <li>
                                    < Link className='menu-item' to='/CompanyForm'>
                                        <div className="menu-icon">
                                            <i class="bi bi-paragraph"></i>
                                        </div>
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    < Link className='menu-item' href='/ContactUs'>
                                        <div className="menu-icon">
                                            <i class="bi bi-vector-pen"></i>
                                        </div>
                                        ContactUs
                                    </Link>
                                </li>
                                <li>
                                    < Link className='menu-item dropdown-toggle' id="navbarDarkDropdownMenuLink" href='# '>
                                        <div className="menu-icon">
                                            <i class="bi bi-box"></i>
                                        </div>
                                        Packages
                                    </Link>

                                </li>
                            </ul>
                        </div>
                        <div className="side-menu-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideMenu




