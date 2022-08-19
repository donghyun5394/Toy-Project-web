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
        
        <div className='infoBox'>
                <div className='bookinfo-img'>
                <img src={ menu.detail.image }  alt={ menu.bookName }/>
                </div>
                <div className='bookinfo'>
                <h1 className='name'>{ menu.bookName }</h1>
                <div className='infoFlex'><h3 className='infoTitle'>저자</h3><div className='edit'> { menu.bookEdit }</div></div>
                <div className='infoFlex'><h3 className='infoTitle'>판매가</h3><div className='price'> { menu.bookPrice }</div></div>
                <div className='infoFlex'><h3 className='infoTitle'>도서 평점 </h3><div>{ menu.bookPoint }</div></div>
                <div className='infoFlex'><h3 className='infoTitle'>도서 판매량 </h3><div>{ menu.bookSell }</div></div>
                <div className='infoFlex'><h3 className='infoTitle'>도서 출판일 </h3><div>{ menu.release }</div></div>
                <h3 className='infoTitle'>도서 내용 </h3><div>{ menu.detail.description }</div>
                <div>{ menu.bookDescription } </div>
                </div>
                </div>
                <form >
                         <fieldset className='field'>
                         { menu.detail.comment.map((value,index) => <li key={index}>{value}</li>)}
                        </fieldset>
                </form>
                
            
            </>
        )
    );
}

export default Menu;