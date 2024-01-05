import { Routes , Route, Navigate } from "react-router-dom";
import HomeStorePageAU from "./HomeStorePageAU";
import ProductPageAU from "./ProductPageAU";
import CarritoBolsa from "./CarritoBolsaAU";
import NavbarAU from "../../Components/NavbarAU";
import AccountPageAU from "./AccountPage";


function AuthenticatedApp() {
    return (
        <>
        <NavbarAU/>
        <Routes>
            <Route path="/" element={<HomeStorePageAU/>}></Route>
            <Route path="/account" element={<AccountPageAU/>} />
            <Route path="/product" element={<ProductPageAU/>} />
            <Route path="/bolsa" element={<CarritoBolsa/>}/>

            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
        </>
     );
}

export default AuthenticatedApp;