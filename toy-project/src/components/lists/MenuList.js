import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BookItem from '../items/BookItem';
import { callGetMenuListAPI } from "../../API/bookListAPI";


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            /* menuList 호출 API */
            dispatch(callGetMenuListAPI());
        },
        []
    );
    
    
    

    return (
        menuList && (
            <div className="menuBox">
                { menuList.map(menu => <BookItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );
}

export default MenuList;