import { NavLink } from 'react-router-dom';
import "./Navbar.css";
function Header() {
    
    return (
        <div id = "expracMain" class = "Main">
        <header class="page-header">
        <NavLink to='/'>
        <img src="../images/logo.png"></img>
        </NavLink>
        <nav>
            <ul class="menuBar">
                <li><NavLink to='/booklist'>전체도서목록</NavLink></li>
                <li><NavLink to='/recommend'>추천도서목록</NavLink></li>
            </ul>
       </nav>
       </header>
       </div>
    );
}

export default Header;