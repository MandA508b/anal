import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import AuthRequire from "./components/AuthRequire";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Reports from "./pages/Reports";
import './App.css'
import ResultSearch from "./pages/ResultSearch";
import Profile from "./pages/Profile";

function App() {

    return (
        <Routes>
            {/*private routes*/}
            <Route element={<AuthRequire/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path={'/reports'} element={<Reports/>}/>
                <Route path={'/resultsearch'} element={<ResultSearch/>}/>
                <Route path={'/profile'} element={<Profile/>}/>

            </Route>
            {/*public routes*/}
            <Route path={'/registration'} element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;
