import React, {useState} from 'react';
import jwt_decode from "jwt-decode";
import {useSearchMutation} from "../redux/search/searchApiSlice";
import {useDispatch} from "react-redux";
import {setData} from "../redux/search/searchSlice";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [site, setSite] = useState('')
    const [pageList, setPageList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [handleSearch] = useSearchMutation()
    const handleCheck = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const userId = jwt_decode(localStorage.getItem('token')).id
        if (!!site.length && !!pageList.length) {
            console.log({userId, pageList, searchedPage: site}, jwt_decode(localStorage.getItem('token')))
            const data = await handleSearch({userId, pageList, searchedPage: site})
            dispatch(setData(data))
            navigate('/resultsearch')
            console.log(data)
        }
        console.log(site, pageList)
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
                        </li>

                        <ul id="user-dropdown" className="dropdown-content">
                            <li><a href="page-profile.html"><i className="fa fa-user"></i> Profile</a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="page-sign-in.html"><i className="fa fa-sign-out"></i> Logout</a>
                            </li>
                        </ul>

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
                                <Link to={'/'} className=" waves-effect waves-blue">

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
                    accusamus
                    ullam,
                    numquam magni dignissimos in ex ducimus rerum, ea neque, necessitatibus consectetur repellendus nam
                    atque
                    at.
                </div>
                <br/>

                <form>

                    <div className="card-panel">
                        <h4>Our Site</h4>

                        <div className="row">
                            <div className="col l5 s12">
                                <div className="input-field">
                                    <input id="input_text" type="text" className="validate"
                                           placeholder="https://ibm.com" onChange={e => setSite(e.target.value)}/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="card-panel">
                        <h4>Examination</h4>

                        <div className="row">
                            <div className="col l5 s12">
                                <div className="input-field">
                                    <textarea id="textarea1" className="materialize-textarea" placeholder={'Textarea'}
                                              onChange={e => setPageList(e.target.value.split('\n'))}
                                    />
                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col l6 s12">
                                <button className="btn" type="submit" name="action" onClick={handleCheck}>
                                    Run check <i className="mdi-content-send right"></i>
                                </button>
                                {!isLoading ? null : <div className="lds-ring">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                }

                                <br/>


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

export default Dashboard;