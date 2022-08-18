import Menu from "../components/items/Menu";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector  } from 'react-redux';
import Review from "../components/form/Review";



function BookInfo() {
   
    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const { id } = useParams();
    console.log(menuList);

    useEffect(
        () => {
            
        },
        []
    );

    return (
        <>
        <div>
            <h1></h1>
            <Menu id={ id }/>
            <Review/>
        </div>
      
        </>
        
           
    );
}

export default BookInfo;