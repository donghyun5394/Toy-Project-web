import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuListAPI } from "../../API/bookListAPI";
import RecommendItem from '../items/RecommendItem';


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
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
            <div className="recommendbox">
               { menuList.map(menu => <RecommendItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );
}

export default MenuList;