import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';
import Searchbar from '../components/commons/Searchbar';
import Footer from '../components/commons/Footer';

function Layout() {

    return (
        <div>
            <Header/>
            <Searchbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
