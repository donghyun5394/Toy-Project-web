import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

function Navbar() {

    return (
        <div>
            <ul>
                <li><NavLink to='/'>메인으로</NavLink></li>
                <li><NavLink to='/'>메뉴보기</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;