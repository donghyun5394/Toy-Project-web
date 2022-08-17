import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BookItem from '../items/BookItem';
import { callGetMenuListAPI } from "../../API/bookListAPI";


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const a = menuList && Math.max.apply(Math, menuList.map (function(menu) { return menu.bookPoint; }));
    
    const dispatch = useDispatch();

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
               { menuList.filter(menu => menu.bookPoint == 10) 
                .map(menu => <BookItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );
}

export default MenuList;