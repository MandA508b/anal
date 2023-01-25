import React, {useState} from 'react';
import {setCredentials} from "../redux/auth/authSlice";
import {useNavigate} from "react-router";
import {useLoginMutation} from "../redux/auth/authApiSlice";
import {useDispatch} from "react-redux";

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()
    const [handleLogin] = useLoginMutation()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email.length && pass.length) {
            try {
                const data = await handleLogin({email, password: pass}).unwrap()
                dispatch(setCredentials(data))
                navigate('/dashboard')
            } catch (e) {
                console.log(e)
                alert('Сталась помилка(')
            }
        }
    }

    return (
        <>
            <section id="sign-in">

                <canvas id="bubble-canvas"></canvas>

                <form action="dashboard.html" onSubmit={handleSubmit}>
                    <div className="row links">
                        <div className="col s6 logo">
                            <img src="../assets/_con/images/logo-white.png" alt=""/>
                        </div>
                        <div className="col s6 right-align"><strong>Sign In</strong> / <a href="page-sign-up.html">Sign
                            Up</a>
                        </div>
                    </div>

                    <div className="card-panel clearfix">


                        <div className="input-field">
                            <i className="fa fa-envelope prefix"></i>
                            <input placeholder={'Email'} id="input_email" type="email"
                                   onChange={e => setEmail(e.target.value)}/>

                        </div>

                        <div className="input-field">
                            <i className="fa fa-unlock-alt prefix"></i>
                            <input placeholder={'Password'} id="password-input" type="password" className="validate"
                                   onChange={e => setPass(e.target.value)}/>

                        </div>

                        <div className="switch">
                            <label>
                                <input type="checkbox" checked/>
                                <span className="lever"></span>
                                Remember
                            </label>
                        </div>

                        <button className="waves-effect waves-light btn-large z-depth-0 z-depth-1-hover">

                            Sign In
                        </button>
                    </div>

                    <div className="links right-align">
                        <a href="page-forgot-password.html">Forgot Password?</a>
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

        </>
    );
};

export default Login;