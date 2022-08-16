import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';
import Searchbar from '../components/commons/Searchbar';

function Layout() {

    return (
        <div>
            <Header/>
            <Searchbar/>
            <Outlet/>
        </div>
    );
}

export default Layout;
