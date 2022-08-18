import MenuList from "../components/lists/MenuList";
import { callSortAPI } from "../API/bookListAPI";
import { nameSortAPI } from "../API/bookListAPI";
import { useDispatch } from "react-redux";

function BookList() {

    
    const dispatch = useDispatch();

    const onClickHandler=()=>{
        dispatch(callSortAPI())
    }

    const onClickHandlerName=()=>{
        dispatch(nameSortAPI())
    }
    

    return (
        <>
            <ul className="booklist-Bar" >
            <button onClick={onClickHandlerName}>가나다순 정렬</button>
            <button onClick={onClickHandler}>출간일순 정렬</button>
            </ul>
            <MenuList/>
        </>
    );
}

export default BookList;