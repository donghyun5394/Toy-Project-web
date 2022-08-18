import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BookItem from '../items/BookItem';
import { callGetMenuListAPI } from "../../API/bookListAPI";
import { callSortAPI } from "../../API/bookListAPI";


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
    
    const onClickHandler=()=>{
        dispatch(callSortAPI())
    }
    

    return (
        menuList && (
            <div className="menuBox">
                <button onClick={onClickHandler}>가나다순 정렬</button>
                { menuList.map(menu => <BookItem key={ menu.id } menu={ menu }/>) }
                
            </div>
        )
    );
}

export default MenuList;