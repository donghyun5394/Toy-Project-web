import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BookItem from '../items/BookItem';
import { callGetMenuListAPI } from "../../API/bookListAPI";


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    //module에 menuReducer을 받아옴
    const menuList = result.menulist;
    //modele에 menulist을 받아옴
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            /* menuList 호출 API */
            // 화면이 최초 랜더할때 dispatch에 요청한 callGetMenuListAPI함수
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