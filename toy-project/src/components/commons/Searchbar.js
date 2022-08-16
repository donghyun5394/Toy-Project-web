import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import "./Searchbar.css";
function Navbar() {

    return (
  <>
    <span class='searchBar'>
        <input id="text" type="text" class='input_text' placeholder="검색어를 입력하세요" maxlength="25" 
        onkeydown="enterSearch()"/>
    
        <input type="button" class='sch_smit' value="🔍"
         onclick="myFunction()"/>

    </span>
  </>
       
    );
}

export default Navbar;