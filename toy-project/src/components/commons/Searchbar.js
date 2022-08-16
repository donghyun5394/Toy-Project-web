import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import "./Searchbar.css";
function Navbar() {

    return (
  <>
    <span className='searchBar'>
        <input id="text" type="text" className='input_text' placeholder="검색어를 입력하세요" maxLength="25" 
        //onKeyDown="enterSearch()"
        />
    
        <input type="button" className='sch_smit' value="🔍"
         //onClick="myFunction()"
         />

    </span>
  </>
       
    );
}

export default Navbar;