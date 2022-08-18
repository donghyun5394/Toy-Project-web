import Menu from "../components/items/Menu";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import  Review from "../components/form/Review";



function BookInfo() {
   
    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();
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
            
        </div>
        <Review/>
        </>
        
           
    );
}

export default BookInfo;