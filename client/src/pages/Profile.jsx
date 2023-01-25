import React, {useState} from 'react';
import {useChangePasswordMutation, useRenameMutation} from "../redux/auth/authApiSlice";
import jwt_decode from "jwt-decode";
import {Link} from "react-router-dom";

const Profile = () => {
    const [newPass, setNewPass] = useState('')
    const [confirmNewPass, setConfirmNewPass] = useState('')
    const [newName, setNewName] = useState('')
    const [rename] = useRenameMutation()
    const [changePassword] = useChangePasswordMutation()
    const userName = jwt_decode(localStorage.getItem('token'))
    console.log(userName)
    const userId = jwt_decode(localStorage.getItem('token')).id

    const handleReName = async (e) =>{
        e?.preventDefault()
        try{
            if(newName.length) {
                await rename({name: newName, userId})
                alert('your new name: '+ newName)
            }

        }catch (e) {
            alert('Error. See in console')
            console.log(e)
        }
    }
    const handleChangePassword = async (e)=>{
        e?.preventDefault()
        try{
            if(newPass.length && confirmNewPass.length && newPass===confirmNewPass) {
                await changePassword({newPassword: newPass, userId})
                alert('your password is changed')
            }
        }catch (e) {
            alert('Error. See in console')
            console.log(e)
        }

    }
    return (
        <>
            <nav className="navbar-top">
                <div className="nav-wrapper">

                    <a href="#" className="yay-toggle">
                        <div className="burg1"></div>
                        <div className="burg2"></div>
                        <div className="burg3"></div>
                    </a>

                    <a href="#!" className="brand-logo">
                        <img src="../assets/_con/images/logo.png" alt="Con"/>
                    </a>

                    <ul>

                        <li className="user">
                            <a className="dropdown-button" href="#!" data-activates="user-dropdown">
                                John Doe<i className="mdi-navigation-expand-more right"></i>
                            </a>

                            <ul id="user-dropdown" className="dropdown-content">
                                <li><a href="page-profile.html"><i className="fa fa-user"></i> Profile</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="page-sign-in.html"><i className="fa fa-sign-out"></i> Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </nav>


            <aside className="yaybar yay-shrink yay-hide-to-small yay-gestures">

                <div className="top">
                    <div>
                        <a href="#" className="yay-toggle">
                            <div className="burg1"></div>
                            <div className="burg2"></div>
                            <div className="burg3"></div>
                        </a>

                        <a href="#!" className="brand-logo">
                            <img src="../assets/_con/images/logo-white.png" alt="Con"/>
                        </a>
                    </div>
                </div>


                <div className="nano">
                    <div className="nano-content">

                        <ul>
                            <li className="label">Menu</li>
                            <li className="open">
                                <Link to={'/dashboard'} className=" waves-effect waves-blue">

                                    <i className="fa fa-dashboard"></i>
                                    <span>Dashboards</span>
                                </Link>

                            </li>
                            <li><Link to="/reports"><i className="fa fa-user"></i>Reports</Link></li>
                            <li className="label">Personal Area</li>

                            <li><Link to="/profile"><i className="fa fa-user"></i> Profile</Link></li>


                            <li><Link to="/login"><i className="fa fa-sign-out"></i> Logout</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </aside>


            <section className="content-wrap">


                <div className="page-title">

                    <div className="row">
                        <div className="col s12 m9 l10">
                            <h1>Dashboard v1</h1>

                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-home"></i> Home</a> <i
                                    className="fa fa-angle-right"></i>
                                </li>

                                <li><a href='dashboard-v1.html'>Dashboard v1</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="card-panel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident fugiat ipsa facere! Similique
                    accusamus ullam,
                    numquam magni dignissimos in ex ducimus rerum, ea neque, necessitatibus consectetur repellendus nam
                    atque at.
                </div>
                <br/>

                    <form>
                        <div className="card-panel">
                            <h4>Change data</h4>
                            <div className="row">
                                <div className="col l6 s12">
                                    <div className="input-field">
                                        <input id="input_email" type="text" className="validate" placeholder={'username'} onChange={e=>setNewName(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6 s12">
                                    <a className="btn" onClick={handleReName}>Change</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6 s12">
                                    <div className="input-field">
                                        <input id="input_password" type="password" className="validate" placeholder={'Password'}
                                        onChange={e=>setNewPass(e.target.value)}/>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={e=>setConfirmNewPass(e.target.value)} id="input_password" type="password" className="validate" placeholder={'Confirm Password'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6 s12">
                                    <a className="btn" onClick={handleChangePassword}>Change</a>
                                </div>
                            </div>
                        </div>
                    </form>

            </section>


            <footer>&copy; 2023 <strong>nK</strong>. All rights reserved.
            </footer>
            <script type="text/javascript" src="../assets/_con/js/_demo.js"></script>

            <script type="text/javascript" src="../assets/jquery/jquery.min.js"></script>

            <script type="text/javascript" src="../assets/jqueryRAF/jquery.requestAnimationFrame.min.js"></script>

            <script type="text/javascript" src="../assets/nanoScroller/jquery.nanoscroller.min.js"></script>

            <script type="text/javascript" src="../assets/materialize/js/materialize.min.js"></script>


            <script type="text/javascript" src="../assets/simpleWeather/jquery.simpleWeather.min.js"></script>

            <script type="text/javascript" src="../assets/d3/d3.min.js"></script>

            <script type="text/javascript" src="../assets/nvd3/nv.d3.min.js"></script>
            <script type="text/javascript" src="../assets/sortable/Sortable.min.js"></script>

            <script type="text/javascript" src="../assets/_con/js/_con.min.js"></script>


            <script type="text/javascript" src="../assets/google-code-prettify/prettify.js"></script>
        </>
    );
};

export default Profile;