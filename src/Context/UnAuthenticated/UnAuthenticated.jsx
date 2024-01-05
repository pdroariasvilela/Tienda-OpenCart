import { Navigate, Route, Routes } from "react-router-dom";

import ProductPageUN from "./ProductPageUN";
import Login from "./LoginPage";
import HomeStorePageUN from "./HomeStoreAppUN";
import NavBarUN from "../../Components/NavBar.UN";



function UnAuthenticatedApp() {


    return (
        <>
        <NavBarUN/>
        <Routes>
            <Route path="/" element={<HomeStorePageUN/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/product" element={ <ProductPageUN/> }/>
            <Route path="/*" element={<Navigate to='/login' />} />
        </Routes>
        </> 
     );
}

export default UnAuthenticatedApp;