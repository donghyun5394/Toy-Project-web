import { NavLink } from 'react-router-dom';
import "./Navbar.css";
function Header() {
    
    return (
        <div id = "expracMain" className = "Main">
        <header className="page-header">
         <nav>
        <NavLink to='/'>
        <img src="../images/logo.png" width={"230px"} height={"100px"}></img>
        </NavLink>
            <ul className="menuBar">
                <li><NavLink to="/menu">전체도서목록</NavLink></li>
                <li><NavLink to="/recommend">추천도서목록</NavLink></li>
            </ul>
       </nav>
       </header>
       </div>
    );
}

export default Header;