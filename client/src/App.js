import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import AuthRequire from "./components/AuthRequire";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Reports from "./pages/Reports";
import './App.css'
import ResultSearch from "./pages/ResultSearch";
import Profile from "./pages/Profile";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";
function App() {

    useEffect(()=>{
        console.log(jwt_decode(localStorage.getItem('token')))
        if(!jwt_decode(localStorage.getItem('token')).isActivated) alert('Активуйте пошту та перезайдіть')
    },[])

    return (
        <Routes>
            {/*private routes*/}
            <Route element={<AuthRequire/>}>
                <Route index element={<Dashboard/>}/>
                <Route path={'/reports'} element={<Reports/>}/>
                <Route path={'/resultsearch'} element={<ResultSearch/>}/>
                <Route path={'/profile'} element={<Profile/>}/>

            </Route>
            {/*public routes*/}
            <Route path={'/registration'} element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Login/>}/>
        </Routes>
    );
}

export default App;
