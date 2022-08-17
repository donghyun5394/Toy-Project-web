import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetMenuAPI } from "../../API/bookListAPI";

function Menu({ id }) {

    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callGetMenuAPI(id));
        },
        []
    );

    return (
        menu && (
            <>
        
                <img src={ menu.detail.image } style={ { maxWidth: 500 } } alt={ menu.bookName }/>
                <h3>도서 이름 : { menu.bookName }</h3>
                <h3>도서 이름 : { menu.bookEdit }</h3>
                <h3>도서 가격 : { menu.bookPrice }</h3>
                <h3>도서 평점 : { menu.bookPoint }</h3>
                <h3>도서 판매량 : { menu.bookSell }</h3>
                <h3>도서 출판일 : { menu.release }</h3>
                <h3>도서 내용 : { menu.detail.description },{ menu.bookDescription } </h3>
                <div>
                </div>
                
            
            </>
        )
    );
}

export default Menu;