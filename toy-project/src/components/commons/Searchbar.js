import { useNavigate } from 'react-router-dom';
import "./Searchbar.css";
import {  useState } from 'react';

function Navbar() {

    const [searchValue, setSearchValue ] = useState('');
    const navigate = useNavigate();
    const onClickHandler = () => {

        navigate(`/menu/search?bookName=${ searchValue }`);   
    }

    return (
  <>
  <div className='search'>
    <span className='searchBar'>
        <input id="text" type="search" name="bookName"  className='input_text' 
        value={ searchValue } onChange={ e => setSearchValue(e.target.value)} placeholder="검색어를 입력하세요" maxLength="25" 
        
        />
    
        <input type="button" className='sch_smit' onClick={ onClickHandler } value="🔍"
         
         />

    </span>
    </div>
  </>
       
    );
}

export default Navbar;