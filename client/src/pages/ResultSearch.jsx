import React from 'react';
import {useSelector} from "react-redux";
import {selectData} from "../redux/search/searchSlice";
import {Link} from "react-router-dom";

const ResultSearch = () => {
    const data = useSelector(selectData)
    const isData = Boolean(data?.data?.length)
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

                {
                   !isData ? <div>No Data</div> :
                        <div className="card-panel">
                            <h4>Result Search</h4>
                            <h5>{data.data[data.data.length - 1].date.split("T")[0].replaceAll("-", '/')}</h5>
                            <div className="row">
                                <div className="col l12 s12">
                                    <table className="table table-striped">
                                        <thead>

                                        <tr>
                                            <th>#</th>
                                            <th>Link to check</th>
                                            <th>Availability on the site</th>
                                            <th>Presence in search results</th>
                                            <th>Link parameters inside</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            data.data.map((elem, i) => {
                                                if (i !== data.data.length - 1) {
                                                    return (
                                                        <tr>
                                                            <th>{i + 1}</th>
                                                            <td>{elem.url}</td>
                                                            <td>{elem.onSite ? 'Yes' : 'No'}</td>
                                                            <td>{elem.isSearched ? 'Yes' : 'No'}</td>
                                                            <td>{`position ${elem.position}`}</td>
                                                        </tr>
                                                    )
                                                }

                                            })
                                        }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                }


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

export default ResultSearch;