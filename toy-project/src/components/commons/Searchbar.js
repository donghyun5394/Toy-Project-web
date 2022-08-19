import { useNavigate } from 'react-router-dom';
import "./Searchbar.css";
import {  useState } from 'react';


function Navbar() {

  
    const enterSearch = (e) => {
        if(e.keyCode == 13){
          onClickHandler();
        }
       
    }

    const [searchValue, setSearchValue ] = useState('');
    const navigate = useNavigate();
    const onClickHandler = () => {
        setSearchValue('');
        navigate(`/menu/search?bookName=${ searchValue }`);   
    }

    return (
  <>
  <div className='search'>
    <span className='searchBar'>
        <input id="text" type="search" name="bookName"  className='input_text' 
        value={ searchValue } onChange={ e => setSearchValue(e.target.value)} placeholder="검색어를 입력하세요" maxLength="25"
        onKeyDown={enterSearch} 
        
        />
    
        <input type="button" className='sch_smit' onClick={ onClickHandler } value="🔍"
         
         />

    </span>
    </div>
  </>
       
    );
}

export default Navbar;