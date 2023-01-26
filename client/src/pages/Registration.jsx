import React, {useState} from 'react';
import {useRegistrationMutation} from "../redux/auth/authApiSlice";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const Registration = () => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [email, setEmail] = useState('')
    const [handleRegistration] = useRegistrationMutation()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!!username.length && !!pass.length && !!confirmPass.length && !!email.length && pass===confirmPass){
            await handleRegistration({name:username, email, password:pass})
            navigate('/')
        }
    }
    return (
        <>
            <section id="sign-up">

                <canvas id="bubble-canvas"></canvas>

                <form onSubmit={handleSubmit}>
                    <div className="row links">
                        <div className="col s6 logo">
                            <img src="../assets/_con/images/logo-white.png" alt=""/>
                        </div>
                        <div className="col s6 right-align">
                            <Link to="/login">Sign In</Link>
                            / <strong>Sign Up</strong>
                        </div>
                    </div>

                    <div className="card-panel clearfix">


                        <div className="input-field">
                            <i className="fa fa-user prefix"></i>
                            <input id="input_username" type="text" placeholder={'username'} onChange={e=>setUsername(e.target.value)}/>
                        </div>

                        <div className="input-field">
                            <i className="fa fa-envelope prefix"></i>
                            <input id="input_email" type="email" placeholder={'email'} onChange={e=>setEmail(e.target.value)}/>
                        </div>


                        <div className="input-field">
                            <i className="fa fa-unlock-alt prefix"></i>
                            <input id="input_password" type="password" placeholder={'password'} onChange={e=>setPass(e.target.value)}/>
                        </div>

                        <div className="input-field">
                            <i className="fa fa-unlock-alt prefix"></i>
                            <input id="input_password" type="password" placeholder={'confirm password'} onChange={e=>setConfirmPass(e.target.value)}/>
                        </div>

                        <p>
                            <input type="checkbox" id="checkbox_terms"/>
                            <label htmlFor="checkbox_terms">I agree to the <a href="#">terms of use</a>.</label>
                        </p>

                        <button className="waves-effect waves-light btn-large z-depth-0 z-depth-1-hover">Sign Up
                        </button>
                    </div>

                </form>

            </section>


            <script type="text/javascript" src="../assets/_con/js/_demo.js"></script>

            <script type="text/javascript" src="../assets/jquery/jquery.min.js"></script>

            <script type="text/javascript" src="../assets/jqueryRAF/jquery.requestAnimationFrame.min.js"></script>

            <script type="text/javascript" src="../assets/nanoScroller/jquery.nanoscroller.min.js"></script>

            <script type="text/javascript" src="../assets/materialize/js/materialize.min.js"></script>

            <script type="text/javascript" src="../assets/sortable/Sortable.min.js"></script>

            <script type="text/javascript" src="../assets/_con/js/_con.min.js"></script>


            <script type="text/javascript" src="../assets/google-code-prettify/prettify.js"></script>
        </>
    );
};

export default Registration;