import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callGetSearchMenuListAPI} from '../API/bookListAPI';
import BookItem from '../components/items/BookItem';

function BookSearchResult() {

    const [searchParams] = useSearchParams();
    const bookName = searchParams.get('bookName');
    
    const result = useSelector(state => state.menuReducer);
    const menuList = result.searchMenulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            dispatch(callGetSearchMenuListAPI(bookName));
        },
        [bookName]
    );


    return ( 
            menuList && (
            <div className="menuBox">
                { menuList.map(menu => <BookItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );



}

export default BookSearchResult;