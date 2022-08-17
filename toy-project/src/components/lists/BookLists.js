import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ListItem from '../items/ListItem';
import { callGetMenuListAPI } from "../../API/bookListAPI";


function BookLists() {

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
                { menuList.map(menu => <ListItem key={ menu.bookNum } menu={ menu }/>) }
            </div>
        )
    );
}

export default BookLists;