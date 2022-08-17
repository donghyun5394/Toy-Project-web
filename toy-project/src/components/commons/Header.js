import { NavLink } from 'react-router-dom';
import "./Navbar.css";
function Header() {
    
    return (
        <div id = "expracMain" className = "Main">
        <header className="page-header">
        <NavLink to='/'>
        <img src="../images/logo.png" width={"230px"} height={"100px"}></img>
        </NavLink>
        <nav>
            <ul className="menuBar">
                <li><a href="/booklist">전체도서목록</a></li>
                <li><a href="/recommend">추천도서목록</a></li>
            </ul>
       </nav>
       </header>
       </div>
    );
}

export default Header;