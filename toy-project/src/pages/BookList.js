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
           <div className="Button" >
            <button type="button" className="rebt" onClick={onClickHandlerName}>
            가나다순
            </button>
            <button type="button" className="rebt" onClick={onClickHandler}>
            출간일순
            </button>
            </div>
            <MenuList/>
        </>
    );
}

export default BookList;